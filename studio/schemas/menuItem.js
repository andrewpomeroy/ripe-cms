// import { fieldTypes } from "./pageBuilder";

const menuItem = {
  name: "menuItem",
  type: "object",
  title: "Item",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      type: 'array',
      of: [{ type: 'block',
        // of: [],
        styles: [],
        lists: []
     }]
    },
    {
      name: "price",
      type: "string",
      title: "Price",
      description: "Aligned to the right of the column. Just keep it simple — if pricing is complicated, leave this blank and instead include pricing info in the description"
    }
    // {
    //   name: "menuSectionDescription",
    //   type: "text",
    //   title: "description",
    // },
  ],
  // preview: {
  //   select: {
  //     title: 'title',
  //     // description: 'description',
  //     price: 'price'
  //   },
  //   prepare({ title, price }) {
  //     return {
  //       title: `${title}${price && ` (${price})`}`,
  //       subtitle: price
  //     }
  //   }
  // }
}

export default menuItem;
