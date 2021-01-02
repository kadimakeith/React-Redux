import React, { Component } from "react";
import Input from './Input';
import store from './Store'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Input store ={store}  />
      </div>
    );
  }
 
}

export default App;
