import { BiHeading } from 'react-icons/bi'

const menuSubHeading = {
  name: "menuSubHeading",
  type: "object",
  title: "Section Heading",
  icon: BiHeading,
  fields: [
    {
      name: "menuSubHeadingText",
      type: "string",
      title: "Heading Text",
    },
  ],
  preview: {
    select: {
      menuSubHeadingText: 'menuSubHeadingText',
    },
    prepare({ menuSubHeadingText }) {
      return {
        title: menuSubHeadingText?.toUpperCase() || "Section Heading",
      }
    }
  },

}

export default menuSubHeading;
