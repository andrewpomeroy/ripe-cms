// import { fieldTypes } from "./pageBuilder";

const menuSection = {
  name: "menuSection",
  type: "object",
  title: "Section",
  fields: [
    {
      name: "menuSectionHeading",
      type: "string",
      title: "Heading",
    },
    {
      name: "menuSectionItems",
      type: "array",
      title: "Items",
      of: [{ type: "menuItem" }],
      validation: Rule => Rule.required().min(1),
    }
    // {
    //   name: "menuSectionDescription",
    //   type: "text",
    //   title: "description",
    // },
  ],
  preview: {
    select: {
      menuSectionHeading: 'menuSectionHeading',
    },
    prepare({ menuSectionHeading }) {
      return {
        title: menuSectionHeading || "Section",
      }
    }
  },

}

export default menuSection;
