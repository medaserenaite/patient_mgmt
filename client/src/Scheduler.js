import React, { Component } from "react";
import "./Scheduler.scss";

class Home extends Component {
  //insterts a constructor that initializes the default state
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Scheduler">
        <div className="Calendar">
          <div className="days">
              <div className="col col-empty">
              <div className="col col-1">M</div>
              <div className="col col-2">T</div>
              <div className="col col-3">W</div>
              <div className="col col-4">Th</div>
              <div className="col col-5">F</div>
              <div className="col col-6">Sat</div>
              <div className="col col-7">Sun</div>
            </div>

            {/* <div className="times">
              <div className="row row-1">8:00 AM</div>
              <div className="row row-2">8:30 AM</div>
              <div className="row row-3">9:00 AM</div>
              <div className="row row-4">9:30 AM</div>
              <div className="row row-1">10:00 AM</div>
              <div className="row row-2">10:30 AM</div>
              <div className="row row-3">11:00 AM</div>
              <div className="row row-4">11:30 AM</div>
              <div className="row row-1">12:00 PM</div>
              <div className="row row-2">12:30 PM</div>
              <div className="row row-3">1:00 PM</div>
              <div className="row row-4">1:30 PM</div>
              <div className="row row-1">2:00 PM</div>
              <div className="row row-2">2:30 PM</div>
              <div className="row row-3">3:00 PM</div>
              <div className="row row-4">3:30 PM</div>
              <div className="row row-3">4:00 PM</div>
              <div className="row row-4">4:30 PM</div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
