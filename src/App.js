import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react'
import Keypad from './components/Keypad.js'
import Result from './/components/Result.js'

class App extends Component {
  constructor() {
    super();
    this.state = {result: ""}
  }
  
  render() {
    return (
      <div>
          <div className="calculator-body">
              <h1>Calculator</h1>
              <Result result={this.state.result}/>
              <Keypad onClick={this.onClick}/>
          </div>
      </div>
  );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
