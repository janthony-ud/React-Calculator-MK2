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

  calculate = () => {
    try {
        this.setState({
            result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })
    }
  };
 
  reset = () => {
    this.setState({
        result: ""
    })
  };

  onClick = button => {
    if(button === "="){
        this.calculate()
    }
    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }
    else {
        this.setState({
            result: this.state.result + button
        })
    }
};
}

export default App;
