// ./src/desk-structure/index.js (or similar)

import S from '@sanity/desk-tool/structure-builder'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default () =>
  S.list()
    .title('Menus')
    .items([
      // Minimum required configuration
      orderableDocumentListDeskItem({type: 'menu'}),

      // Optional configuration
      // orderableDocumentListDeskItem({
      //   type: 'project',
      //   title: 'Projects',
      //   icon: Paint
      // }),

      // ... all other desk items
    ])