import { MdHorizontalRule } from 'react-icons/md'

const menuSeparator = {
  name: "menuSeparator",
  type: "object",
  title: "Section Separator",
  icon: MdHorizontalRule,
  fields: [
    {
      name: "nothing",
      type: "string",
      title: "Nothing",
      hidden: true,
      initialValue: "nothing"
    },
  ],
  preview: {
    prepare({  }) {
      return {
        title: "Separator",
      }
    }
  },

}

export default menuSeparator;
