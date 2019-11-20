import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentCollection from './components/StudentCollection';
import ComponentA from './components/ComponentA';

const name = 'Sabrina';
const students = [
  { fullName: "Ada",        email: "ada@lovelace.com" },
  { fullName: "Katherine",  email: "kat@nasa.gov" },
  { fullName: "Devin",      email: "dmoney@g.mail" },
  { fullName: "Becca",      email: "bmoney@g.mail" },
  { fullName: "Dee",        email: "dee@dee.dee" }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StudentCollection people={students} />
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
