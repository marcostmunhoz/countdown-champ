import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    this.months = {
      "janeiro": 0,
      "fevereiro": 1,
      "março": 2,
      "abril": 3,
      "maio": 4,
      "junho": 5,
      "julho": 6,
      "agosto": 7,
      "setembro": 8,
      "outubro": 19,
      "novembro": 10,
      "dezembro": 11
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leadingZero(num) {
    return (num < 10 ? '0' + num : num);
  }

  dateFromString(dateString) {
    const matches = dateString.match(/^(\d{1,2})(\/| de )([a-z]+|\d{1,2})(\/| de )(\d{2}|\d{4})$/i);
    if (matches != null) {
      const day =  matches[1];
      const month = isNaN(matches[3]) ? this.months[matches[3]] : matches[3] - 1;
      const year = matches[5];
      const date = new Date(year <= 99 ? year + 2000 : year, month, day);
      return date;
    }
    return null;
  }
  
  getTimeUntil(deadline) {
    const deadlineDate = this.dateFromString(deadline);
    const time = deadlineDate - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60) % 24));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.state.days} dias</div>
        <div className="Clock-hours">{this.leadingZero(this.state.hours)} horas</div>
        <div className="Clock-minutes">{this.leadingZero(this.state.minutes)} minutos</div>
        <div className="Clock-seconds">{this.leadingZero(this.state.seconds)} segundos</div>
      </div>
    );
  }
}

export default Clock;