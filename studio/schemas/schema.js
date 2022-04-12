// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import menuSection from './menuSection'
import menuColumn from './menuColumn'
import menuItem from './menuItem'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      title: "Menus",
      name: "menu",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Subtitle (hours, etc.)",
          name: "subtitle",
          type: 'array',
          of: [{
            type: 'block',
            styles: [],
            lists: []
          }]
        },
        {
          title: "Columns",
          name: "columns",
          type: "array",
          of: [{ type: "menuColumn" }],
          validation: Rule => Rule.required().min(1).max(2),
        }
      ],
      preview: {
        select: {
          title: 'title',
        },
        prepare({ title }) {
          return {
            title,
          }
        }
      },
    },
    menuSection,
    menuColumn,
    menuItem,
  ])
})
