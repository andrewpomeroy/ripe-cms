/** @jsx h */
import { h, render } from 'preact';
import { toHTML } from '@portabletext/to-html';
import { App } from './App';

import './style.css';

const url =
  "https://omde8c75.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'menu'%5D%7B%0A%20%20columns%5B%5D%20%7B%0A%20%20%20%20content%5B%5D%20%7B%0A%20%20%20%20%20%20menuSectionHeading%2C%0A%20%20%20%20%20%20menuSectionItems%5B%5D%20%7B%0A%20%20%20%20%20%20%20%20name%2C%0A%20%20%20%20%20%20%20%20price%2C%0A%20%20%20%20%20%20%20%20description%5B%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%20%0A%7D";

const fetchStuff = async () => {
  try {
    const result = await fetch(url);
    const data = result.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};

const doThings = async () => {
  const data = await fetchStuff();
  if (data) {
    try {
      const formatted = JSON.stringify(data, null, 2);
      const blocks =
        data.result[0].columns[0].content[0].menuSectionItems[0].description;
      const html = toHTML(blocks);
      // document.querySelector('#container').innerHTML = html;
      // document.querySelector('#prehtml').innerText = html;
      // document.querySelector('#pre').innerHTML = formatted;
      render(<App html={html} />, document.querySelector('#app'));
    } catch (e) {
      console.error(e);
    }
  }
};

// console.log('heh', document.querySelector('#app'));

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
//   <div id="container"></div>
//   <pre id="preHtml"></pre>
//   <pre id="pre"></pre>
// `;

doThings();
