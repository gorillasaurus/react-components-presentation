import React from 'react';
import Highlight from 'react-highlight';

const cssCode = `
render() {
  return (
    <div>
      <span className="label">Name</span>
      <input />
    </div>
  );
}
`;

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <h1>CSS: here be dragons</h1>

        <p>Global class names are a recipe for disaster (here's looking at you bootstrap).</p>

        <Highlight className="jsx">
          { cssCode }
        </Highlight>
      </div>
    );
  }
}
