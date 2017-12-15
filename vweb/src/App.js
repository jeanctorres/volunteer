import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Volunteer</h1>
        </header>
        <p className="App-intro">
          Hello Dan, see you tomorrow. I've been working on setting up a basic
          website for our project.
        </p>
      </div>
    );
  }
}

export default App;
