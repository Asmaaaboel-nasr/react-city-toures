import React, { Component } from "react";
import Nav from "./components/Nav";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import "./App.css";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="clear-fix" />
        <Tours />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
