import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:8080/")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-intro">{this.state.apiResponse}</p>
      </header>
    </div>
  );
  } 
}

export default App;
