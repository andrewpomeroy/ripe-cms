/** @jsx h */
import { h } from 'preact';
import { toHTML } from '@portabletext/to-html';

export const Renderer = ({ data }) => {

  let html;
  if (data) {
    const formatted = JSON.stringify(data, null, 2);
    const blocks =
      data.result[0].columns[0].content[0].menuSectionItems[0].description;
    html = toHTML(blocks);
  }

  if (html) return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )

};
