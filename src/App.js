import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

const name = 'Sabrina';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Student fullName="Improved Ada" email="improved-ada@ada.co" />
        <ComponentA ComponentB />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        
        <p>{name}'s kitten:</p>
        <img src="http://placekitten.com/400/300" alt="kitten" />
      </header>
    </div>
  );
}

export default App;
