(this["webpackJsonpstreet-trees"]=this["webpackJsonpstreet-trees"]||[]).push([[0],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n(44),a=n(34),o=n(37),i=window.innerWidth<500?document.querySelector("#root").offsetWidth:document.querySelector("#root").offsetWidth/2,c=Object(o.a)((function(e){return{root:{display:"flex"},appBar:Object(a.a)({},e.breakpoints.up("sm"),{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}),appBarShift:{width:"calc(100% - ".concat(i,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:i},title:{flexGrow:1},hide:{display:"none !important"},drawer:Object(a.a)({},e.breakpoints.up("sm"),{width:i,flexShrink:0}),drawerPaper:{width:i},drawerHeader:Object(r.a)(Object(r.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),content:{maxWidth:"100%",flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-i},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0},chips:{textAlign:"center",margin:"1rem auto",width:"calc(100% - 2rem)"},chip:{margin:".1rem"},chipUnSelected:{backgroundColor:"gray !important"},formControl:{margin:e.spacing(1),width:"100%"},noLabel:{marginTop:e.spacing(3)}}}))},150:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return le}));var r=n(34),a=n(44),o=n(166),i=n(22),c=n(71),s=n.n(c),l=n(92),u=n(8),d=n(0),b=n.n(d),j=n(73),h=n.n(j),p=(n(232),n(13)),g=n.n(p),m=n(151),f=n.n(m),O=(n(263),n(103)),v=n.n(O),x=n(152),w=n(153),y=n.n(w),k=n(154),C=n(155),_=n(159),N=n(115),S=n(57),L=n(2),T=n(84),R=n(58),B=n(47),E=n(320),W=n(312),z=n(309),A=n(311),P=n(104),F=n(174),I=n(161),M=n.n(I),H=n(162),q=n.n(H),G=n(317),D=n(175),U=n(316),J=n(74),X=n(40),Z=n(178),K=n(30),V=n(116),Y=n(314),$=n(315),Q=n(105),ee=n(313),te=n(125),ne=n(318),re=n(128),ae=n(18),oe=n(5),ie=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),ce=["Barking and Dagenham","Barnet","Bexley","Bromley","Camden","City of London","Ealing","Enfield","Greenwich","Hammersmith and Fulham","Harrow","Hillingdon","Hounslow","Islington","Kensington and Chelsea","Lambeth ","Lewisham","Merton ","Newham","Redbridge","Richmond","Southwark","Sutton","TFL","Tower Hamlets","Waltham Forest","Westminster"],se={Alder:["rgb",255,255,224],Apple:["rgb",252,255,174],Ash:["rgb",246,255,128],Beech:["rgb",238,255,88],Birch:["rgb",227,255,53],"Black Locust":["rgb",227,255,53],Blackthorn:["rgb",200,255,0],Cherry:["rgb",200,255,0],Chestnut:["rgb",170,255,0],Cypress:["rgb",154,255,0],Elm:["rgb",154,255,0],Hawthorn:["rgb",123,255,0],Hazel:["rgb",109,255,0],Hornbeam:["rgb",109,255,0],"Horse Chestnut":["rgb",95,255,0],Lime:["rgb",70,251,0],Maple:["rgb",60,245,0],Oak:["rgb",51,238,0],Other:["rgb",44,230,0],Pear:["rgb",38,221,0],Pine:["rgb",38,221,0],Plane:["rgb",30,201,0],Poplar:["rgb",29,189,0],Rowan:["rgb",28,177,6],Sycamore:["rgb",29,165,16],Whitebeam:["rgb",31,152,26],Willow:["rgb",31,152,26]};function le(e){e.showBorder,e.onTilesLoad;var t=Object(ae.a)(),n=Object(N.b)(t),c=Object(S.a)("species",Object.keys(se)),j=Object(u.a)(c,2),p=j[0],m=j[1],O=Object(S.a)("treeCounts",null),w=Object(u.a)(O,2),I=w[0],H=w[1],le=Object(d.useState)(null),ue=Object(u.a)(le,2),de=ue[0],be=ue[1],je=Object(d.useState)(null),he=Object(u.a)(je,2),pe=he[0],ge=he[1],me=Object(d.useState)(null),fe=Object(u.a)(me,2),Oe=fe[0],ve=fe[1],xe=Object(d.useState)(null),we=Object(u.a)(xe,2),ye=we[0],ke=we[1],Ce=Object(d.useState)(!1),_e=Object(u.a)(Ce,2),Ne=_e[0],Se=_e[1],Le=Object(d.useState)(!1),Te=Object(u.a)(Le,2),Re=Te[0],Be=Te[1],Ee=function(){Be(!0)};Object(d.useEffect)((function(){document.fonts.load("18px Lato").then((function(){return Se(!0)}))}),[]),Object(d.useEffect)((function(){var e=!1;return function(){var t=Object(l.a)(s.a.mark((function t(){var n,r,a,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v()("https://maps.london.gov.uk/v1/query/core_london_street_trees_web_3857?columns=count(gla_tree_group)%2Cgla_tree_group&group=gla_tree_group");case 2:return n=t.sent,t.next=5,v()("https://maps.london.gov.uk/v1/query/core_london_street_trees_web_3857?columns=count(gla_tree_group)%2Cgla_tree_group%2Cborough&group=borough%2Cgla_tree_group");case 5:return r=t.sent,t.next=8,v()("https://maps.london.gov.uk/v1/query/core_london_street_trees_web_3857?columns=count(borough)%2Cborough&group=borough");case 8:a=t.sent,e||(o=n.data.reduce((function(e,t){return Number(e)+Number(t.count)}),0),be(n.data.map((function(e,t){return{id:t,commonName:e.gla_tree_group,treeCount:Number(e.count),percentage:Math.round(Number(e.count)/o*100)}}))),H(o),ge(r.data),ve(a.data));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){return e=!0}}),[]);var We=Object(T.c)("trees",T.b),ze=Object(u.a)(We,2),Ae=ze[0],Pe=ze[1],Fe=function(e){Ke(Number(1));var t,n=e.properties;n.lng=e.geometry.coordinates[0],n.lat=e.geometry.coordinates[1],t=n,Pe(Object(R.pack)([t]),"push")},Ie=function(e){var t,n;t=e.lng,n=e.lat,at&&at.flyTo({center:[t,n],zoom:14,speed:2,curve:1,easing:function(e){return e}})},Me=Object(S.a)("drawer",!0),He=Object(u.a)(Me,2),qe=He[0],Ge=He[1],De=function(e){var t=e.children,n=e.value,r=e.index,i=Object(o.a)(e,["children","value","index"]);return Ne&&Object(oe.jsx)("div",Object(a.a)(Object(a.a)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},i),{},{children:n===r&&Object(oe.jsx)(U.a,{p:3,children:t})}))},Ue=function(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}},Je=Object(S.a)("tab",0),Xe=Object(u.a)(Je,2),Ze=Xe[0],Ke=Xe[1],Ve=[{field:"treeCount",sort:"desc"}],Ye=b.a.useState([]),$e=Object(u.a)(Ye,2),Qe=$e[0],et=$e[1],tt=Object(d.useRef)(null),nt=Object(d.useState)(null),rt=Object(u.a)(nt,2),at=rt[0],ot=rt[1],it=Object(d.useRef)(new h.a.Popup({offset:5,closeButton:!1})),ct=document.createElement("div");ct.className="tree";var st=document.createElement("span"),lt=document.createTextNode("");st.appendChild(lt),ct.appendChild(st);var ut=Object(d.useRef)(new h.a.Marker(ct,{anchor:"top-left"})),dt=Object(S.a)("lng",-.1),bt=Object(u.a)(dt,2),jt=bt[0],ht=(bt[1],Object(S.a)("lat",51.49)),pt=Object(u.a)(ht,2),gt=pt[0],mt=(pt[1],Object(S.a)("zoom",9)),ft=Object(u.a)(mt,2),Ot=ft[0],vt=(ft[1],b.a.memo((function(e){return Object(oe.jsx)("iframe",{title:"streetview",onLoad:Ee,height:"250",frameBorder:"0",style:{width:"100%",border:0},src:"https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBMog3xE4XjGzf03rpSzZ8ryRq0LYBuHFM&pitch=10&location="+e.lat+","+e.lng,allowFullScreen:!0})})));return Object(d.useEffect)((function(){var e=new h.a.Map({container:tt.current,style:"os_night.json",center:[jt,gt],zoom:Ot});e.touchZoomRotate.disableRotation(),e.addControl(new h.a.NavigationControl({showCompass:!1,showZoom:!0}),"bottom-left");var t=new f.a({accessToken:"pk.eyJ1IjoiZ2xhLWdpcyIsImEiOiJjanBvNGh1bncwOTkzNDNueWt5MGU1ZGtiIn0.XFxLdq2dXttcXSXTiREPTA",mapboxgl:h.a,marker:!1,collapsed:!0,countries:"gb",bbox:[-.489,51.28,.236,51.686],filter:function(e){return e.context?e.context.map((function(e){return"district"===e.id.split(".").shift()&&"Greater London"===e.text})).reduce((function(e,t){return e||t})):e}});e.addControl(t,"top-left");var n=function(e,t,n){var r=e.geometry,a=e.properties;t.current.setLngLat(r.coordinates).addTo(n),t.current._element.children[0].removeChild(t.current._element.children[0].childNodes[0]);var o=document.createTextNode(a.tree_name?a.tree_name:a.gla_tree_group+", "+a.borough);t.current._element.children[0].appendChild(o)};if(e.on("load",(function(){e.addLayer({id:"trees",type:"circle",filter:["in","gla_tree_group"].concat(Object(i.a)(p)),"source-layer":"trees",source:{type:"vector",url:"https://apps.london.gov.uk/tileserver/data/trees.json"},paint:{"circle-color":["match",["get","gla_tree_group"]].concat(Object(i.a)(Object.entries(se).reduce((function(e,t){return e.concat(t)}),[])),[["rgb",255,255,255]]),"circle-radius":{base:.5,stops:[[10,1],[11,2],[14,3],[15,4],[16,7],[17,8],[18,15],[19,20],[20,40]]}}}),e.on("mouseenter","trees",(function(t){t.features.length&&(e.getCanvas().style.cursor="pointer")})),e.on("mouseleave","trees",(function(){e.getCanvas().style.cursor=""})),e.on("mousemove","trees",(function(t){var n=e.queryRenderedFeatures(t.point);if(n.length){var r=n[0],a=document.createElement("div");g.a.render(Object(oe.jsx)(k.a,{feature:r}),a),it.current.setLngLat(t.lngLat).setDOMContent(a).addTo(e)}})),e.on("click","trees",(function(t){var r=e.queryRenderedFeatures(t.point);if(r.length){var a=r[0];Fe(a),n(a,ut,e),Be(!1)}})),e.on("moveend",(function(){})),e.addSource("single-point",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),e.addLayer({id:"point",source:"single-point",type:"circle",paint:{"circle-radius":10,"circle-color":"#448ee4"}}),t.on("result",(function(t){e.getSource("single-point").setData(t.result.geometry)})),ot(e)})),Ae&&Object(R.unpack)(Ae).length>0){Ke(Number(1));var r=Object(R.unpack)(Ae)[0],a={coordinates:[r.lng,r.lat]},o=r;delete o.lngLat,n({geometry:a,properties:o},ut,e)}return function(){return e.remove()}}),[]),Object(oe.jsxs)("div",{className:n.root,children:[Object(oe.jsx)(A.a,{}),Object(oe.jsx)(W.a,{position:"fixed",style:{backgroundColor:"unset",visibility:"hidden"},className:Object(L.a)(n.appBar,Object(r.a)({},n.appBarShift,qe)),children:Object(oe.jsxs)(z.a,{children:[Object(oe.jsx)(P.a,{variant:"h6",noWrap:!0,className:n.title}),Object(oe.jsx)(B.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){Ge(!0),setTimeout((function(){at.resize()}),100)},className:Object(L.a)(qe&&n.hide),style:{visibility:"visible"},children:Object(oe.jsx)(M.a,{})})]})}),Object(oe.jsxs)("main",{className:Object(L.a)(n.content,Object(r.a)({},n.contentShift,qe)),children:[Object(oe.jsx)("div",{className:n.drawerHeader}),Object(oe.jsx)("div",{children:Object(oe.jsx)("div",{ref:tt,style:{position:"absolute",top:0,left:0,height:"100%",width:"".concat(qe?document.querySelector("#root").offsetWidth-N.a+"px":"100%")}})})]}),Object(oe.jsxs)(E.a,{disableBackdropTransition:!ie,disableDiscovery:ie,className:n.drawer,variant:"persistent",anchor:"right",open:qe,onOpen:function(){return console.log("opened")},onClose:function(){return console.log("closed")},classes:{paper:n.drawerPaper},children:[Object(oe.jsxs)("div",{className:n.drawerHeader,children:[Object(oe.jsx)(B.a,{onClick:function(){Ge(!1),setTimeout((function(){at.resize()}),10)},children:Object(oe.jsx)(q.a,{})}),Object(oe.jsx)("h3",{style:{textAlign:"center",margin:"0 auto"},children:"LONDON STREET TREES"})," ",Object(oe.jsx)(C.a,{title:"About",text:"This map has been created using tree data made available by London\u2019s local authorities and Transport for London. It shows information for over 800,000 trees. The majority of these are street trees, with some trees in parks and open spaces. London has over 8 million trees, so the map is only a partial illustration of the capital\u2019s urban forest, and does not include data from all boroughs. The data was last updated in 2019-20."})]}),Object(oe.jsx)(F.a,{}),Object(oe.jsxs)("div",{className:n.chips,children:[Object(oe.jsx)(Z.a,{variant:"outlined",label:p.length!==Object.keys(se).length?"Show":"Hide",className:p.length!==Object.keys(se).length?"":n.chipUnSelected,onClick:function(){var e=p.length!==Object.keys(se).length?Object.keys(se):[];at.setFilter("trees",["in","gla_tree_group"].concat(Object(i.a)(e))),m(e)}},"All"),se&&Object.keys(se).map((function(e,t){var r;return Ne&&Object(oe.jsx)(Z.a,{variant:"outlined",label:e,style:{backgroundColor:"rgb(".concat(se[e].slice(1),")"),color:p.includes(e)&&(r=se[e].slice(1),1-(.299*r[0]+.587*r[1]+.114*r[2])/255<.5)?"#0C090A":"whitesmoke"},className:Object(L.a)(n.chip,p.includes(e)?"":n.chipUnSelected),onClick:function(){var t=p.includes(e)?p.filter((function(t){return t!==e})):p.concat(e);at.setFilter("trees",["in","gla_tree_group"].concat(Object(i.a)(t))),m(t)}},e)}))]}),Object(oe.jsx)(F.a,{}),Object(oe.jsx)(J.a,{square:!0,children:Object(oe.jsxs)(G.a,{value:Ze,onChange:function(e,t){Ke(Number(t))},centered:!0,children:[Object(oe.jsx)(D.a,Object(a.a)({label:"Tree areas"},Ue(0))),Object(oe.jsx)(D.a,Object(a.a)({label:"Tree details"},Ue(1)))]})}),Object(oe.jsxs)(De,{value:Ze,index:0,children:[Object(oe.jsx)("h1",{children:"Citywide Statistics"}),I?Object(oe.jsxs)("p",{children:["There are ",new Intl.NumberFormat("en-GB").format(I)," ","trees in this dataset"]}):Object(oe.jsx)(K.a,{children:Object(oe.jsx)(K.a.Paragraph,{children:Object(oe.jsx)(K.a.Line,{})})}),de?Object(oe.jsx)(oe.Fragment,{children:Object(oe.jsx)("div",{style:{height:280,width:"100%"},children:Object(oe.jsx)(V.a,{rows:de,sortModel:Ve,columns:[{field:"commonName",headerName:"Common Name",width:130},{field:"treeCount",headerName:"Tree Count",width:130},{field:"percentage",headerName:"Percentage",width:130}],pageSize:3})})}):Object(oe.jsx)("span",{children:Object(oe.jsx)(K.a,{children:Object(oe.jsxs)(K.a.Paragraph,{children:[Object(oe.jsx)(K.a.Line,{}),Object(oe.jsx)(K.a.Line,{}),Object(oe.jsx)(K.a.Line,{}),Object(oe.jsx)(K.a.Line,{}),Object(oe.jsx)(K.a.Line,{}),Object(oe.jsx)(K.a.Line,{}),Object(oe.jsx)(K.a.Line,{})]})})}),Object(oe.jsx)("h1",{children:"Maintainer Statistics"}),Object(oe.jsx)(ne.a,{multiple:!0,value:Qe,id:"tags-outlined",options:ce,getOptionLabel:function(e){return e},filterSelectedOptions:!0,onChange:function(e,t){et(t),setTimeout((function(){document.querySelector("div.MuiDataGrid-footer").scrollIntoView({behavior:"smooth"})}),500);var n=pe.filter((function(e){return t.includes(e.borough)})).reduce((function(e,t){return e[t.borough]=e[t.gla_tree_group]||0,e}),{}),r=Object.keys(n).map((function(e){return pe.filter((function(t){return t.borough===e}))})),a=Oe.filter((function(e){return t.includes(e.borough)})),o=r.map((function(e){var t={};return t[e[0].borough]=e.length,t})),i=r.map((function(e){return e.sort((function(e,t){return Number(e.count)-Number(t.count)})).pop()}));ke(a.map((function(e,t){return{id:t,boroughName:e.borough,treeCount:Number(a[t].count),treeTypes:Number(Object.values(o[t]).pop()),mostCommonTree:"".concat(i[t].gla_tree_group," (").concat(new Intl.NumberFormat("en-GB").format(i[t].count),", ").concat(Math.round(Number(i[t].count)/Number(a[t].count)*100,2),"%)")}})))},renderInput:function(e){return Object(oe.jsx)(re.a,Object(a.a)(Object(a.a)({},e),{},{variant:"outlined",label:"One or more organisations"}))}}),ye&&ye.length>0?Object(oe.jsx)("div",{style:{height:280,width:"100%"},children:Object(oe.jsx)(V.a,{rows:ye,sortModel:Ve,columns:[{field:"boroughName",headerName:"Maintainer",width:130},{field:"treeCount",headerName:"Tree Count",width:130},{field:"treeTypes",headerName:"Tree Types",width:130},{field:"mostCommonTree",headerName:"Most Common Tree (n)",width:150}],pageSize:3})}):""]}),Object(oe.jsx)(De,{value:Ze,index:1,children:Ae&&Object(R.unpack)(Ae).length>0?Object(oe.jsx)("div",{children:Ae&&Ae.length>0&&Object(R.unpack)(Ae).reverse().map((function(e,t){return Object(oe.jsxs)("div",{children:[Object(oe.jsx)("h1",{children:e.tree_name?e.tree_name:e.gla_tree_group}),Object(oe.jsx)(ee.a,{component:J.a,children:Object(oe.jsx)(Y.a,{className:n.table,"aria-label":"simple table",children:Object(oe.jsxs)($.a,{children:[Object.keys(e).filter((function(e){return!["objectid","tree_name","lng","lat"].includes(e)})).filter((function(t){return""!==e[t]})).map((function(t,n){return Object(oe.jsxs)(te.a,{children:[Object(oe.jsx)(Q.a,{scope:"row",variant:"head",children:y()(t.replaceAll("_"," "))}),Object(oe.jsx)(Q.a,{align:"left",children:"load_date"!==t?e[t]:Object(x.a)(e[t])})]},n)})),Re?null:Object(oe.jsx)(te.a,{children:Object(oe.jsx)(Q.a,{colSpan:2,children:Object(oe.jsx)(K.a,{style:{height:250,width:"100%"},children:Object(oe.jsx)(K.a.Image,{})})})},"streetviewPlaceholder"),Object(oe.jsx)(te.a,{children:Object(oe.jsx)(Q.a,{colSpan:2,children:Object(oe.jsx)(vt,{lng:e.lng,lat:e.lat})})},"streetview")]})})})," ",Object(oe.jsxs)("div",{children:[Object(oe.jsx)("p",{}),Object(oe.jsx)(X.a,{size:"small",variant:"contained",onClick:function(){return Ie(e)},children:"Centre on map"}),Object(oe.jsx)("p",{}),Object(oe.jsx)(_.a,{}),Object(oe.jsx)("p",{}),Object(oe.jsx)(X.a,{size:"small",variant:"contained",onClick:function(){!function(e){Pe(Object(R.pack)(Object(R.unpack)(Ae).filter((function(t){return t.objectid!==e.objectid}))),"push"),ut.current.remove(),Ke(Number(0))}(e)},children:"Remove this tree's detail"})]})]},t)}))}):Object(oe.jsx)("p",{children:"No trees currently selected"})})]})]})}}).call(this,n(113))},152:function(e,t,n){"use strict";function r(e){var t=e.substr(0,4),n=e.substr(4,2),r=e.substr(6,2);return new Date(t,n,r).toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",(function(){return r}))},154:function(e,t,n){"use strict";n(0);var r=n(5);t.a=function(e){var t=e.feature;return Object(r.jsxs)("div",{children:[t.properties.tree_name?t.properties.tree_name+" ("+t.properties.gla_tree_group+")":t.properties.gla_tree_group,", ",t.properties.borough]})}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(8),a=n(0),o=n.n(a),i=n(40),c=n(298),s=n(304),l=n(302),u=n(303),d=n(301),b=n(5);function j(e){var t=o.a.useState(!1),n=Object(r.a)(t,2),a=n[0],j=n[1],h=e.title,p=e.text,g=function(){j(!1)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(i.a,{size:"small",variant:"contained",onClick:function(){j(!0)},children:h}),Object(b.jsxs)(c.a,{open:a,onClose:g,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(b.jsx)(d.a,{id:"alert-dialog-title",children:h}),Object(b.jsx)(l.a,{children:Object(b.jsx)(u.a,{id:"alert-dialog-description",children:p})}),Object(b.jsx)(s.a,{children:Object(b.jsx)(i.a,{onClick:g,color:"primary",autoFocus:!0,children:"Close"})})]})]})}},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(71),a=n.n(r),o=n(92),i=n(8),c=n(0),s=n.n(c),l=n(40),u=n(322),d=n(5);function b(){var e=s.a.useState(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];function c(){return(c=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.clipboard.writeText(document.location.href);case 2:r(!0);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{size:"small",variant:"contained",onClick:function(){return c.apply(this,arguments)},children:"Share this tree URL"}),Object(d.jsx)(u.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},message:"URL copied to clipboard",onClose:function(e,t){"clickaway"!==t&&r(!1)},open:n,autoHideDuration:1500})]})}},230:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);n(0);var r=n(13),a=n.n(r),o=n(164),i=n(20),c=n(84),s=(n(230),n(150)),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var d=n(5),b=document.createElement("link");b.rel="stylesheet",b.href="https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css",document.head.appendChild(b),a.a.render(Object(d.jsx)(o.a,{children:Object(d.jsx)(c.a,{ReactRouterRoute:i.a,children:Object(d.jsx)(s.a,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}()},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(8),a=n(0),o=n.n(a);function i(e,t){var n=o.a.useState((function(){var n=localStorage.getItem(e);return n?JSON.parse(n):t})),a=Object(r.a)(n,2),i=a[0],c=a[1];return o.a.useEffect((function(){window.localStorage.setItem(e,JSON.stringify(i))}),[i,e]),[i,c]}}},[[295,1,2]]]);
//# sourceMappingURL=main.9c7f5fe6.chunk.js.map