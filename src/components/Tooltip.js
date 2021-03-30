import React from 'react'

const Tooltip = ({ feature }) => {
  return (
    <div>
      {feature.properties.tree_name
        ? feature.properties.tree_name +
          ' (' +
          feature.properties.gla_tree_group +
          ')'
        : feature.properties.gla_tree_group}
      {', '}
      {feature.properties.borough}
    </div>
  )
}

export default Tooltip
