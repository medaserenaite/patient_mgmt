import React, { Component } from 'react';
import './App.css';
// import LogReg from './LogReg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import Home from './Home'
// import Home2 from './Home2'
import Scheduler from './Scheduler'
// import NewPatient from './NewPatient'
import Scheduler2 from './Components/Scheduler'
// import Sched from './Components/Sched'

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

// componentWillMount() {
//     this.callAPI();
// }

  render(){
    return (
      <div className="App">

<Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/home1">Client</Link>
          </li>
          <li>
            <Link to="/home2">HCP</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul> */}

        {/* <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {/* <Route exact path="/home1">
            <Home />
          </Route> */}
          {/* <Route exact path="/home2">
            <Home2 />
          </Route> */}
          <Route exact path="/scheduler">
            <Scheduler />
          </Route>
          {/* <Route exact path="/NewPatient">
            <NewPatient />
          </Route> */}
          <Route exact path="/Scheduler2">
            <Scheduler2 />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </div>
    </Router>
        <p>{this.state.apiResponse}</p>
        {/* <LogReg /> */}
      </div>
    )
  }
}

export default App;
