/** @jsx h */
import { h } from 'preact';
// import { ButtonCounter } from './ButtonCounter';

export const App = ({ html }) => {
  const onChildClicked = (e) => {
    console.warn('callback from parent triggered', e);
  };

  return (
    <div class="container pt-2">
      {/* <h1>Preact Jsx Starter Template</h1>

      <p>Simple Preact JSX Template with a custom ButtonCounter Component</p>

      <ButtonCounter name="Preact JSX" onClicked={(e) => onChildClicked(e)} /> */}

      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />

      {/* <pre>{html}</pre> */}
    </div>
  );
};
