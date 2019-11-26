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

  changeDisplayName() {
    if ( this.state.displayName === false ) {
      this.setState( { displayName: true } );
    } else {
      return;
    }
  }

  onButtonClick = () => {
    this.setState( { displayName: !this.state.displayName } );
  }

  onNameChange = ( event ) => {
    this.setState( { name: event.target.value } );
  }

  render() {
    let display = 'Sorry, I don\'t know your name.';
    // access state with `this.state`
    if ( this.state.displayName ) {
      display = `Hello, ${ this.state.name }.`;
    }
    return (
      <section>
        <div><button onClick={ this.onButtonClick }>Toggle Display</button></div>
        { display }
        <div>Change your name: <input onChange={ this.onNameChange }></input></div>
      </section>
    );
  }
}

export default NameDisplay;