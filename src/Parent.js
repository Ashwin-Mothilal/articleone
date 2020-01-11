import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ComponentChild, FunctionalChild, PureChild } from "./Children";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyState: new Date().valueOf()
    };
    this.interval = null;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PureChild />
          <FunctionalChild />
          <ComponentChild />
          <button
            onClick={() => {
              clearInterval(this.interval);
              console.log("Stopped Interval");
            }}
            style={{
              marginTop: 10,
              width: 100,
              height: 35,
              fontWeight: "700",
              cursor: "pointer"
            }}
          >
            Stop Interval
          </button>
        </header>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        dummyState: new Date().valueOf()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Parent;
