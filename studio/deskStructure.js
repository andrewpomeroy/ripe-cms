import { BiFoodMenu } from 'react-icons/bi'

import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Menus')
    .items([
      S.listItem()
        .title('Daytime Menu')
        .icon(BiFoodMenu)
        .child(
          S.document()
            .schemaType('menu')
            .documentId('daytimeMenu')
        ),
      S.listItem()
        .title('Evening & Weekend Menu')
        .icon(BiFoodMenu)
        .child(
          S.document()
            .schemaType('menu')
            .documentId('eveningWeekendMenu')
        ),
    ])
