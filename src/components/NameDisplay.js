// NameDisplay.js
import React from 'react';

class NameDisplay extends React.Component {
  constructor() {
    super();
    // set state in the constructor
    this.state = {
      name: 'Ada',
      displayName: true
    };
  }

  render() {
    let display = 'Sorry, I don\'t know your name.';
    // access state with `this.state`
    if ( this.state.displayName ) {
      display = `Hello, ${ this.state.name }.`;
    }
    return (
      <section>
        { display }
      </section>
    );
  }
}

export default NameDisplay;