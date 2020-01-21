import React, { Component } from "react";
// import moment from 'moment'
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "../Scheduler.scss";
// import Sched from "./Sched";
// import DayPickerInput from 'react-day-picker/DayPickerInput';
import Day from './Day'

class Scheduler extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: null,
      showDay: false,
    };
  }

  handleDayClick(day, { selected }) {
    console.log('click')
    this.setState({
      selectedDay: selected ? undefined : day,
      showDay: true,
    });
    console.log("++" + this.state.selectedDay)
//     let x = this.state.selectedDay.toLocaleDateString()
// console.log(this.state.x)
    // this.forceUpdate()
    // console.log(this.state.selectedDay)
  }

  render() {
//     const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );
    return (
      <div className="Scheduler">
        {/* <DayPickerInput onDayChange={day => console.log(day)} /> */}
        {/* <ul>{listItems}</ul> */}
        <DayPicker
          showOutsideDays
          className="DayPicker"
          selectedDays={this.state.selectedDay}
          onDayClick={this.handleDayClick}
          month={new Date(2017, 4, 5)}
          todayButton="Go to Today"
          modifiers={{
            foo: new Date()
          }}
          onTodayButtonClick={(day, modifiers) => console.log(day, modifiers)}
        />
        <p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            :  "Please select a day 👻"}
        </p>
        {/* <Sched /> */}

        {this.state.showDay ? 
        <Day
        
        /> 
        : "nieko"}
      </div>
      
    );
    
  }
}

export default Scheduler;
