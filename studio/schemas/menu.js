import { BiFoodMenu } from 'react-icons/bi'

const menu = {
  title: "Menus",
  name: "menu",
  type: "document",        
  icon: BiFoodMenu,
  fieldsets: [
    {
      name: 'main',
      title: "Main"
    },
    {
      name: 'columns',
      title: "Menu Items",
      options: {
        columns: 2
      },
    },
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      fieldset: 'main',
    },
    {
      title: "Subtitle (hours, etc.)",
      name: "subtitle",
      type: 'array',
      fieldset: 'main',
      of: [{
        type: 'block',
        styles: [],
        lists: []
      }]
    },
    {
      title: "Left column",
      name: "menuColumnLeft",
      type: "array",
      fieldset: "columns",
      of: [
        { type: "menuItem" }, 
        {    
          type: "menuSubHeading",
        },
        {    
          type: "menuSeparator",
        }
      ],
    },
    {
      title: "Right column",
      name: "menuColumnRight",
      type: "array",
      fieldset: "columns",
      // doesn't work
      hidden: (({ document }) => document._id === 'daytimeMenu'),
      of: [
        { type: "menuItem" }, 
        {    
          type: "menuSubHeading",
        },
        {
          type: "menuSeparator",
        }
      ],
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
