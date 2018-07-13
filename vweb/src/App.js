import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Volunteer</h1>
        </header>
        <p className="App-intro">New version.</p>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/first">First</Link>
              </li>
              <li>
                <Link to="/second">Second</Link>
              </li>
            </ul>
            {routes.map((route, i) => <Route key={i} {...route} />)}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
