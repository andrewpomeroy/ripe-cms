// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import menu from './menu'
import menuSection from './menuSection'
import menuColumn from './menuColumn'
import menuItem from './menuItem'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    menu,
    menuSection,
    menuColumn,
    menuItem,
  ])
})
