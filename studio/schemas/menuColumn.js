// import { fieldTypes } from "./pageBuilder";

const menuColumn = {
  name: "menuColumn",
  type: "object",
  title: "Column",
  fields: [
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "menuSection" }],
    },
  ],
  preview: {
    prepare(selection, something) {
      // console.log("%c💣️ selection", "background: aliceblue; color: dodgerblue; font-weight: bold", selection);
      // console.log("%c💣️ something", "background: aliceblue; color: dodgerblue; font-weight: bold", something);
      return {
        title: "Column"
      }
    }
  }
  // preview: {
  //   select: {
  //     title: "orgName",
  //     subtitle: "personName",
  //   },
  //   prepare(selection) {
  //     const { title, subtitle } = selection;
  //     return {
  //       title: title || subtitle,
  //       subtitle: title ? subtitle : "",
  //     };
  //   },
  // },
}

export default menuColumn;
