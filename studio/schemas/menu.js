import { BiFoodMenu } from 'react-icons/bi'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

const menu = {
  title: "Menus",
  name: "menu",
  type: "document",        
  icon: BiFoodMenu,
  orderings: [orderRankOrdering],
  fields: [
    // Minimum required configuration
    orderRankField({ type: 'menu' }),
    // OR you can override _some_ of the field settings
    // orderRankField({ type: 'category', hidden: false }),
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
}

export default menu;
