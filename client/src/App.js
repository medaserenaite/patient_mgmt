import React, { Component } from 'react';
import './App.css';

class App extends Component {

  //insterts a constructor that initializes the default state
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

// inserted the method callAPI() that will fetch the data from the API and store the response on this.state.apiResponse.
callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}

  render(){
    return (
      <div>
        <p>{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default App;
