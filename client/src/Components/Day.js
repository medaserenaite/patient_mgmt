import React, { Component } from "react";
// import moment from 'moment'
// import DayPicker from 'react-day-picker';
import "react-day-picker/lib/style.css";
import "../Scheduler.scss";
// import Sched from './Sched'
import data from '../sampleData'

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   selDay: this.props.selDay.toLocaleString
      students: [
        {
          id: 1,
          timex: "8:00"
        },
        { 
            id: 2, 
            timex: "9:00" },
        {
          id: 3,
          timex: "10:00"
        },
        {
          id: 4,
          timex: "11:00",
        },
        {
            id: 5,
            timex: "12:00",
          }
      ]
    };
  }

  componentDidMount() {
      console.log('************')
      console.log()
      console.log('************')
  }

  handleClick() {
    if (document.body.getElementById === 1) {
      console.log("true");
    }
  }

  handleAppt() {
    console.log("hi")
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, timex} = student; //destructuring
      return (
        
          <tr key={id}>
            <td>{timex}</td>
            <td className="apptSlot"></td>
            {/* <td className="apptSlot" onClick={this.handleAppt()}></td> */}
          </tr>
       
      );
    });
  }

  render() {
    // const numbers = ['8:00', '9:00', '10:00', '11:00', '12:00'];
    // const listItems = numbers.map((number) =>
    //   <div className="line">{number}</div>
    // );
    return (
      <div className="Day">
        <table>
          <tr>
            <th></th>
            <th>doc #1</th>
            <th>doc #2</th>
          </tr>
        </table>
        <table id="students">
          <tbody>{this.renderTableData()}</tbody>
        </table>
        {/* <table>
            <tr>
                <th></th>
                <th>doc #1</th>
                <th>doc #2</th>
            </tr>
            <tr>
                <td>8:00</td>
                <td onClick={this.handleClick()} id="1"></td>
                <td onClick={this.handleClick()} id="2"></td>
            </tr>
            <tr>
                <td>9:00</td>
                <td onClick={this.handleClick()} id="3"></td>
                <td onClick={this.handleClick()} id="4"></td>
            </tr>
            <tr>
                <td>10:00</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>11:00</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>12:00</td>
                <td></td>
                <td></td>
            </tr>
            <tr>

            </tr>
        </table> */}
        {/* <h1>{this.props.selDay}</h1> */}
        {/* {listItems} */}
      </div>
    );
  }
}

export default Day;
