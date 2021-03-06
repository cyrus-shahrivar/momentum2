import React, { Component } from 'react';
import './TimeComponent.css';

class TimeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {date: (new Date().toLocaleTimeString())};
  }

  tick() {
    this.setState({date: (new Date().toLocaleTimeString())});
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="time">
          {this.state.date}
      </div>
    );
  }
}

export default TimeComponent;

// $(document).ready(function () {
//   var nowTime;
//   var clockString;
//   var midDayTime = moment('12:00', 'HH:mm');
//   var eveningTime = moment('17:00', 'HH:mm');
//   var nightTime = moment('22:00', 'HH:mm');
//   var quotes = window.quotes;


//   // clocktime and greeting
//   function displayGreeting() {
//       $('.time, .greeting').empty();

//       // current time
//       nowTime = moment();
//       clockString = nowTime.format('h:mm');
//       $('.time').append(clockString);

//       // greeting
//       if (nowTime.isBefore(midDayTime)) {
//           $('.greeting').append('Good Morning');
//       } else if (nowTime.isBefore(eveningTime)) {
//           $('.greeting').append('Good Afternoon');
//       } else if (nowTime.isBefore(nightTime)) {
//           $('.greeting').append('Good Evening');
//       } else {
//           $('.greeting').append('Good Night');
//       }
//   }

//   // clocktime and greeting continuous execution
//   displayGreeting();
//   setInterval(displayGreeting, 60000);

//   // quote

// });
