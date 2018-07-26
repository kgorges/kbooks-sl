import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Routes from "../routes";
import NavBar from "./components/Navigation/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {Routes.map(route => <Route key={route.path} {...route} />)}
      </div>
    );
  }
}

export default App;
