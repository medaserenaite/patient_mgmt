import React, { Component } from "react";
import "./App.css";
import LogReg from './LogReg'

class Home extends Component {
  //insterts a constructor that initializes the default state
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="Home">
        this is home
        <LogReg />
    </div>;
  }
}

export default Home;