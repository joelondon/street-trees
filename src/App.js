import React, { useState, useEffect, useRef } from 'react'
import mapboxgl from 'maplibre-gl'
import 'maplibre-gl/dist/mapbox-gl.css'
import ReactDOM from 'react-dom'

import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

import axios from 'axios'
import PropTypes from 'prop-types'

import YYYYMMDD from './YYYYMMDD'
import toTitleCase from 'titlecase'
import Tooltip from './components/Tooltip'
import AlertDialog from './components/AlertDialog'
import UrlToClipboardButton from './components/UrlToClipboardButton'
// import Iframe from './components/iFrame'

import { drawerWidth, useStyles } from './styles.jsx'

import usePersistedState from './usePersistedState'
import clsx from 'clsx'
import { useQueryParam, StringParam } from 'use-query-params'
import { pack, unpack } from 'jcb64'

import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import { Placeholder } from 'semantic-ui-react'
import { DataGrid, ColDef } from '@material-ui/data-grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { useTheme } from '@material-ui/core/styles'

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZ2xhLWdpcyIsImEiOiJjanBvNGh1bncwOTkzNDNueWt5MGU1ZGtiIn0.XFxLdq2dXttcXSXTiREPTA'

const boroughNames = [
  'Barking and Dagenham',
  'Barnet',
  'Bexley',
  'Bromley',
  'Camden',
  'City of London',
  'Ealing',
  'Enfield',
  'Greenwich',
  'Hammersmith and Fulham',
  'Harrow',
  'Hillingdon',
  'Hounslow',
  'Islington',
  'Kensington and Chelsea',
  'Lambeth ',
  'Lewisham',
  'Merton ',
  'Newham',
  'Redbridge',
  'Richmond',
  'Southwark',
  'Sutton',
  'TFL',
  'Tower Hamlets',
  'Waltham Forest',
  'Westminster'
]

const speciesTypes = {
  Alder: ['rgb', 255, 255, 224],
  Apple: ['rgb', 252, 255, 174],
  Ash: ['rgb', 246, 255, 128],
  Beech: ['rgb', 238, 255, 88],
  Birch: ['rgb', 227, 255, 53],
  'Black Locust': ['rgb', 227, 255, 53],
  Blackthorn: ['rgb', 200, 255, 0],
  Cherry: ['rgb', 200, 255, 0],
  Chestnut: ['rgb', 170, 255, 0],
  Cypress: ['rgb', 154, 255, 0],
  Elm: ['rgb', 154, 255, 0],
  Hawthorn: ['rgb', 123, 255, 0],
  Hazel: ['rgb', 109, 255, 0],
  Hornbeam: ['rgb', 109, 255, 0],
  'Horse Chestnut': ['rgb', 95, 255, 0],
  Lime: ['rgb', 70, 251, 0],
  Maple: ['rgb', 60, 245, 0],
  Oak: ['rgb', 51, 238, 0],
  Other: ['rgb', 44, 230, 0],
  Pear: ['rgb', 38, 221, 0],
  Pine: ['rgb', 38, 221, 0],
  Plane: ['rgb', 30, 201, 0],
  Poplar: ['rgb', 29, 189, 0],
  Rowan: ['rgb', 28, 177, 6],
  Sycamore: ['rgb', 29, 165, 16],
  Whitebeam: ['rgb', 31, 152, 26],
  Willow: ['rgb', 31, 152, 26]
}

export default function App({ showBorder = false, onTilesLoad = null }) {
  const theme = useTheme()
  const classes = useStyles(theme)

  const [speciesFilter, setSpeciesFilter] = usePersistedState(
    'species',
    Object.keys(speciesTypes)
  )

  const [treeCountsCity, setTreeCountsCity] = usePersistedState(
    'treeCounts',
    null
  )
  const [treeQuery, setTreeQuery] = useState(null)
  const [treeQueryBoroughs, setTreeQueryBoroughs] = useState(null)
  const [treeQueryBoroughTotals, setTreeQueryBoroughTotals] = useState(null)

  const [boroughsQuery, setBoroughsQuery] = useState(null)

  const [isReady, setIsReady] = useState(false)

  const [iframeLoaded, setIframeLoaded] = useState(false)
  const iFrameIsLoaded = () => {
    setIframeLoaded(true)
  }

  // try to avoid flash of unstyled content (f.o.u.c)
  useEffect(() => {
    document.fonts.load('18px Lato').then(() => setIsReady(true))
  }, [])

  // TREE GROUPBY SPECIES
  useEffect(() => {
    // load async data
    let ignore = false

    const fetchData = async () => {
      // STATS CITY (by tree type)
      const resultCityTotals = await axios(
        `https://maps.london.gov.uk/v1/query/core_london_street_trees_web_3857?columns=count(gla_tree_group)%2Cgla_tree_group&group=gla_tree_group`
      )

      // STATS BOROUGH (by tree type)
      const resultBoroughs = await axios(
        `https://maps.london.gov.uk/v1/query/core_london_street_trees_web_3857?columns=count(gla_tree_group)%2Cgla_tree_group%2Cborough&group=borough%2Cgla_tree_group`
      )

      // STATS BOROUGH (total trees)
      const resultBoroughTotals = await axios(
        `https://maps.london.gov.uk/v1/query/core_london_street_trees_web_3857?columns=count(borough)%2Cborough&group=borough`
      )

      if (!ignore) {
        const treeTally = resultCityTotals.data.reduce(
          (acc, curr) => Number(acc) + Number(curr.count),
          0
        )

        // STATS - CITY
        setTreeQuery(
          resultCityTotals.data.map((tree, i) => ({
            id: i,
            commonName: tree.gla_tree_group,
            treeCount: Number(tree.count),
            percentage: Math.round(100 * (Number(tree.count) / treeTally))
          }))
        )

        // TALLY TOTAL TREES
        setTreeCountsCity(treeTally)

        // STATS BOROUGH (by tree type)
        setTreeQueryBoroughs(resultBoroughs.data)

        // STATS BOROUGH (total trees)
        setTreeQueryBoroughTotals(resultBoroughTotals.data)
      }
    }

    fetchData()
    return () => (ignore = true)
  }, []) // eslint-disable-line

  const [trees, setTrees] = useQueryParam('trees', StringParam)
  // const [treeLngLat, setTreeLngLat] = useState([])

  const addTree = tree => {
    setTrees(pack([tree]), 'push')
    // setTreeLngLat([tree.lng, tree.lat])
  }

  const deleteTree = tree => {
    setTrees(
      pack(unpack(trees).filter(el => el.objectid !== tree.objectid)),
      'push'
    )
    markerRef.current.remove()
    setTabValue(Number(0))
  }

  const _renderChip = (species, i) => {
    const colourIsLight = rgb => {
      var a = 1 - (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255
      return a < 0.5
    }

    const chipClick = () => {
      const filter = speciesFilter.includes(species)
        ? speciesFilter.filter(f => f !== species)
        : speciesFilter.concat(species)
      map.setFilter('trees', ['in', 'gla_tree_group', ...filter])
      setSpeciesFilter(filter)
    }

    return (
      isReady && (
        <Chip
          variant="outlined"
          label={species}
          key={species}
          style={{
            backgroundColor: `rgb(${speciesTypes[species].slice(1)})`,
            color:
              !speciesFilter.includes(species) ||
              !colourIsLight(speciesTypes[species].slice(1))
                ? 'whitesmoke'
                : '#0C090A'
          }}
          className={clsx(
            classes.chip,
            speciesFilter.includes(species) ? '' : classes.chipUnSelected
          )}
          onClick={chipClick}
        />
      )
    )
  }

  const toggleChips = () => {
    const filter =
      speciesFilter.length !== Object.keys(speciesTypes).length
        ? Object.keys(speciesTypes)
        : []
    map.setFilter('trees', ['in', 'gla_tree_group', ...filter])
    setSpeciesFilter(filter)
  }

  const layerClick = d => {
    setTabValue(Number(1))
    const treeProps = d.properties
    treeProps.lng = d.geometry.coordinates[0]
    treeProps.lat = d.geometry.coordinates[1]
    addTree(treeProps)
  }

  const gotoLocation = (lng, lat, zoom = 17) => {
    map &&
      map.flyTo({
        center: [lng, lat],
        zoom: 14,
        speed: 2,
        curve: 1,
        easing(t) {
          return t
        }
      })
  }

  const gotoTree = tree => {
    gotoLocation(tree.lng, tree.lat, 20)
  }

  const [drawerOpen, setDrawerOpen] = usePersistedState('drawer', true)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
    setTimeout(function() {
      map.resize()
    }, 100)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
    setTimeout(function() {
      map.resize()
    }, 10)
  }

  // TABS
  const TabPanel = props => {
    const { children, value, index, ...other } = props

    return (
      isReady && (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && <Box p={3}>{children}</Box>}
        </div>
      )
    )
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  }

  const tabsProps = index => {
    return {
      id: `scrollable-auto-tab-${index}`,
      // 'aria-controls': `full-width-tabpanel-${index}`
      'aria-controls': `scrollable-auto-tabpanel-${index}`
    }
  }
  const [tabValue, setTabValue] = usePersistedState('tab', 0)

  const tabChange = (event, newValue) => {
    setTabValue(Number(newValue))
  }

  // USED IN CITY AND AREA VALUES
  const columnsGeneralStats: ColDef[] = [
    { field: 'commonName', headerName: 'Common Name', width: 130 },
    { field: 'treeCount', headerName: 'Tree Count', width: 130 },
    { field: 'percentage', headerName: 'Percentage', width: 130 }
  ]

  // USED WHEN VIEWING STATS FOR ONE OR MORE BOROUGHS
  const columnsCompareBoroughs: ColDef[] = [
    { field: 'boroughName', headerName: 'Maintainer', width: 130 },
    { field: 'treeCount', headerName: 'Tree Count', width: 130 },
    { field: 'treeTypes', headerName: 'Tree Types', width: 130 },
    { field: 'mostCommonTree', headerName: 'Most Common Tree (n)', width: 150 }
  ]

  const sortModel = [
    {
      field: 'treeCount',
      sort: 'desc'
    }
  ]

  const [selectionValue, setSelectionValue] = React.useState([])

  const mapContainerRef = useRef(null)
  const [map, setMap] = useState(null)
  const tooltipRef = useRef(
    new mapboxgl.Popup({ offset: 5, closeButton: false })
  )

  const markerDiv = document.createElement('div')
  markerDiv.className = 'tree'
  const markerDivSpan = document.createElement('span')
  const newContent = document.createTextNode('')
  markerDivSpan.appendChild(newContent)
  markerDiv.appendChild(markerDivSpan)

  const markerRef = useRef(
    new mapboxgl.Marker(markerDiv, { anchor: 'top-left' })
  )

  const [mapLng, setLng] = usePersistedState('lng', -0.1)
  const [mapLat, setLat] = usePersistedState('lat', 51.49)
  const [zoom, setZoom] = usePersistedState('zoom', 9)

  const Iframe = React.memo(props => (
    <iframe
      title="streetview"
      onLoad={iFrameIsLoaded}
      height="250"
      frameBorder="0"
      style={{ width: '100%', border: 0 }}
      src={
        'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBMog3xE4XjGzf03rpSzZ8ryRq0LYBuHFM&pitch=10&location=' +
        props.lat +
        ',' +
        props.lng
      }
      allowFullScreen
    ></iframe>
  ))

  // MAIN PROGRAM
  useEffect(() => {
    // Initialize map when component mounts
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'os_night.json',
      center: [mapLng, mapLat],
      zoom: zoom
    })
    map.touchZoomRotate.disableRotation()
    map.addControl(
      new mapboxgl.NavigationControl({ showCompass: false, showZoom: true }),
      'bottom-left'
    )

    const geocoder = new MapboxGeocoder({
      accessToken: MAPBOX_TOKEN,
      mapboxgl: mapboxgl,
      marker: false,
      collapsed: true,
      countries: 'gb',
      bbox: [-0.489, 51.28, 0.236, 51.686],
      filter: function(item) {
        if (!item.context) {
          return item
        } else {
          return item.context
            .map(function(i) {
              return (
                i.id.split('.').shift() === 'district' &&
                i['text'] === 'Greater London'
              )
            })
            .reduce(function(acc, cur) {
              return acc || cur
            })
        }
      }
    })

    map.addControl(geocoder, 'top-left')

    const createTreeMarker = (feature, markerRef, map) => {
      // marker - dom manipulation
      const { geometry, properties } = feature
      markerRef.current.setLngLat(geometry.coordinates).addTo(map)
      markerRef.current._element.children[0].removeChild(
        markerRef.current._element.children[0].childNodes[0]
      )
      const newContent = document.createTextNode(
        properties.tree_name
          ? properties.tree_name
          : properties.gla_tree_group + ', ' + properties.borough
      )
      markerRef.current._element.children[0].appendChild(newContent)
    }

    map.on('load', () => {
      map.addLayer({
        id: 'trees',
        type: 'circle',
        filter: ['in', 'gla_tree_group', ...speciesFilter],
        'source-layer': 'trees',
        source: {
          type: 'vector',
          // tiles: ['https://apps.london.gov.uk/v1/mvt/trees/{z}/{x}/{y}?columns=gla_tree_group,common_name,species_name,gla_id,gla_tree_group,load_date,age,spread__m_,height__m_,diameter_at_breast_height__cm_,borough,age_group'] // postgis via dirt
          url: 'https://apps.london.gov.uk/tileserver/data/trees.json'
        },
        paint: {
          'circle-color': [
            'match',
            ['get', 'gla_tree_group'],
            ...[
              ...Object.entries(speciesTypes).reduce(
                (acc, val) => acc.concat(val),
                []
              )
            ],
            /* other */ ['rgb', 255, 255, 255]
          ],
          // make circles larger as the user zooms from z12 to z22
          'circle-radius': {
            base: 0.5,
            stops: [
              [10, 1],
              [11, 2],
              [14, 3],
              [15, 4],
              [16, 7],
              [17, 8],
              [18, 15],
              [19, 20],
              [20, 40]
            ]
          }
        }
      })

      // change cursor to pointer when user hovers over a clickable feature
      map.on('mouseenter', 'trees', e => {
        if (e.features.length) {
          map.getCanvas().style.cursor = 'pointer'
        }
      })

      // reset cursor to default when user is no longer hovering over a clickable feature
      map.on('mouseleave', 'trees', () => {
        map.getCanvas().style.cursor = ''
      })

      // add tooltip when users mouse move over a point
      map.on('mousemove', 'trees', e => {
        const features = map.queryRenderedFeatures(e.point)
        if (features.length) {
          const feature = features[0]
          // Create tooltip node
          const tooltipNode = document.createElement('div')
          ReactDOM.render(<Tooltip feature={feature} />, tooltipNode)

          // Set tooltip on map
          tooltipRef.current
            .setLngLat(e.lngLat)
            .setDOMContent(tooltipNode)
            .addTo(map)
        }
      })

      map.on('click', 'trees', e => {
        const features = map.queryRenderedFeatures(e.point)
        if (features.length) {
          const feature = features[0]
          layerClick(feature)
          createTreeMarker(feature, markerRef, map)
          setIframeLoaded(false)
        }
      })

      map.on('moveend', () => {
        // const { lng, lat } = map.getCenter()
        // setLng(lng)
        // setLat(lat)
        // setZoom(map.getZoom())
      })

      map.addSource('single-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      })

      map.addLayer({
        id: 'point',
        source: 'single-point',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#448ee4'
        }
      })

      geocoder.on('result', function(e) {
        map.getSource('single-point').setData(e.result.geometry)
      })

      setMap(map)
    })

    if (trees && unpack(trees).length > 0) {
      setTabValue(Number(1))
      const tree = unpack(trees)[0]
      // setTreeLngLat([tree.lng, tree.lat])
      const geometry = { coordinates: [tree.lng, tree.lat] }
      let properties = tree
      delete properties.lngLat
      const tm = { geometry: geometry, properties: properties }
      createTreeMarker(tm, markerRef, map)
    }

    // Clean up on unmount
    return () => map.remove()
  }, []) // eslint-disable-line

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: 'unset', visibility: 'hidden' }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen
        })}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            className={classes.title}
          ></Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(drawerOpen && classes.hide)}
            style={{ visibility: 'visible' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen
        })}
      >
        <div className={classes.drawerHeader} />
        <div>
          <div
            ref={mapContainerRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${
                drawerOpen
                  ? document.querySelector('#root').offsetWidth -
                    drawerWidth +
                    'px'
                  : '100%' //document.querySelector('#root').offsetWidth + 'px'
              }`
            }}
          />
        </div>
      </main>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={drawerOpen}
        onOpen={() => console.log('opened')}
        onClose={() => console.log('closed')}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
          <h3 style={{ textAlign: 'center', margin: '0 auto' }}>
            LONDON STREET TREES
          </h3>{' '}
          <AlertDialog
            title="About"
            text="This map has been created using tree data made available by London’s local authorities and Transport for London. It shows information for over 800,000 trees. The majority of these are street trees, with some trees in parks and open spaces. London has over 8 million trees, so the map is only a partial illustration of the capital’s urban forest, and does not include data from all boroughs. The data was last updated in 2019-20."
          />
        </div>
        <Divider />
        <div className={classes.chips}>
          <Chip
            variant="outlined"
            label={
              speciesFilter.length !== Object.keys(speciesTypes).length
                ? 'Show'
                : 'Hide'
            }
            key={'All'}
            className={
              speciesFilter.length !== Object.keys(speciesTypes).length
                ? ''
                : classes.chipUnSelected
            }
            onClick={toggleChips}
          />
          {speciesTypes && Object.keys(speciesTypes).map(_renderChip)}
        </div>
        <Divider />
        <Paper square>
          <Tabs
            value={tabValue}
            onChange={tabChange}
            // variant="scrollable"
            // scrollButtons="auto"
            // aria-label="scrollable auto tabs"
            centered
          >
            <Tab label="Tree areas" {...tabsProps(0)} />
            <Tab label="Tree details" {...tabsProps(1)} />
          </Tabs>
        </Paper>
        <TabPanel value={tabValue} index={0}>
          <h1>Citywide Statistics</h1>
          {treeCountsCity ? (
            <p>
              There are {new Intl.NumberFormat('en-GB').format(treeCountsCity)}{' '}
              trees in this dataset
            </p>
          ) : (
            <Placeholder>
              <Placeholder.Paragraph>
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          )}
          {treeQuery ? (
            <>
              <div style={{ height: 280, width: '100%' }}>
                <DataGrid
                  rows={treeQuery}
                  sortModel={sortModel}
                  columns={columnsGeneralStats}
                  pageSize={3}
                />
              </div>
            </>
          ) : (
            <span>
              <Placeholder>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </span>
          )}
          <h1>Maintainer Statistics</h1>
          <Autocomplete
            multiple
            value={selectionValue}
            id="tags-outlined"
            options={boroughNames}
            getOptionLabel={option => option}
            filterSelectedOptions
            onChange={(event, selection) => {
              setSelectionValue(selection)
              setTimeout(function() {
                document
                  .querySelector('div.MuiDataGrid-footer')
                  .scrollIntoView({ behavior: 'smooth' }) // BOROUGH SPECIES COUNTS
              }, 500)
              const boroughSpecies = treeQueryBoroughs
                .filter(el => selection.includes(el.borough))
                .reduce((acc, curr) => {
                  acc[curr.borough] = acc[curr.gla_tree_group] || 0
                  return acc
                }, {})
              const boroughGroupBySpecies = Object.keys(
                boroughSpecies
              ).map(el => treeQueryBoroughs.filter(boro => boro.borough === el))

              // BOROUGH COUNTS
              const boroughCounts = treeQueryBoroughTotals.filter(el =>
                selection.includes(el.borough)
              )

              // NUMBER OF SPECIES PER BOROUGH
              const boroughSpeciesCount = boroughGroupBySpecies.map(el => {
                const retval = {}
                retval[el[0].borough] = el.length
                return retval
              })

              // MAIN SPECIES PER BOROUGH
              const boroughSpeciesMain = boroughGroupBySpecies.map(el =>
                el.sort((a, b) => Number(a.count) - Number(b.count)).pop()
              )

              setBoroughsQuery(
                boroughCounts.map((borough, i) => ({
                  id: i,
                  boroughName: borough.borough,
                  //new Intl.NumberFormat('en-GB').format(
                  treeCount: Number(boroughCounts[i].count),
                  // ),
                  treeTypes: Number(
                    Object.values(boroughSpeciesCount[i]).pop()
                  ),
                  mostCommonTree: `${
                    boroughSpeciesMain[i].gla_tree_group
                  } (${new Intl.NumberFormat('en-GB').format(
                    boroughSpeciesMain[i].count
                  )}, ${Math.round(
                    100 *
                      (Number(boroughSpeciesMain[i].count) /
                        Number(boroughCounts[i].count)),
                    2
                  )}%)`
                }))
              )
            }}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="One or more organisations"
              />
            )}
          />
          {boroughsQuery && boroughsQuery.length > 0 ? (
            <div style={{ height: 280, width: '100%' }}>
              <DataGrid
                rows={boroughsQuery}
                sortModel={sortModel}
                columns={columnsCompareBoroughs}
                pageSize={3}
              />
            </div>
          ) : (
            ''
          )}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          {trees && unpack(trees).length > 0 ? (
            <div>
              {trees &&
                trees.length > 0 &&
                unpack(trees)
                  .reverse()
                  .map((tree, index) => (
                    <div key={index}>
                      <h1>
                        {tree.tree_name ? tree.tree_name : tree.gla_tree_group}
                      </h1>
                      <TableContainer component={Paper}>
                        <Table
                          className={classes.table}
                          aria-label="simple table"
                        >
                          <TableBody>
                            {Object.keys(tree)
                              .filter(
                                el =>
                                  ![
                                    'objectid',
                                    'tree_name',
                                    'lng',
                                    'lat'
                                  ].includes(el)
                              )
                              .filter(row => tree[row] !== '')
                              .map((row, i) => (
                                <TableRow key={i}>
                                  <TableCell scope="row" variant="head">
                                    {toTitleCase(row.replaceAll('_', ' '))}
                                  </TableCell>
                                  <TableCell align="left">
                                    {row !== 'load_date'
                                      ? tree[row]
                                      : YYYYMMDD(tree[row])}
                                  </TableCell>
                                </TableRow>
                              ))}
                            {!iframeLoaded ? (
                              <TableRow key="streetviewPlaceholder">
                                <TableCell colSpan={2}>
                                  <Placeholder
                                    style={{ height: 250, width: '100%' }}
                                  >
                                    <Placeholder.Image />
                                  </Placeholder>
                                </TableCell>
                              </TableRow>
                            ) : null}

                            {
                              <TableRow key="streetview">
                                <TableCell colSpan={2}>
                                  <Iframe lng={tree.lng} lat={tree.lat} />
                                </TableCell>
                              </TableRow>
                            }
                          </TableBody>
                        </Table>
                      </TableContainer>{' '}
                      <div>
                        <p></p>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={() => gotoTree(tree)}
                        >
                          Centre on map
                        </Button>
                        <p></p>
                        <UrlToClipboardButton />
                        <p></p>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={() => {
                            deleteTree(tree)
                          }}
                        >
                          Remove this tree's detail
                        </Button>
                      </div>
                    </div>
                  ))}
            </div>
          ) : (
            <p>No trees currently selected</p>
          )}
        </TabPanel>
      </SwipeableDrawer>
    </div>
  )
}
