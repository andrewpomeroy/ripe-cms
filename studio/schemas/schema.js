import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import menu from './menu'
import menuItem from './menuItem'
import menuSubHeading from './menuSubHeading'
import menuSeparator from './menuSeparator'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    menu,
    menuItem,
    menuSubHeading,
    menuSeparator
  ])
})
