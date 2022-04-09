/** @jsx h */
import { h, render } from 'preact';
import { App } from './App';

const ripe_menu_app_id_default = "ripe-menu-app";
let appId;
try {
  appId = ripe_menu_app_id;
}
catch(e) {
  appId = ripe_menu_app_id_default;
}
console.log(`appId: ${appId}`);

render(<App />, document.querySelector(`#${appId}`));