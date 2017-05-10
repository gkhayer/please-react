import React from "react";
import './Datetime.css';

export default class Datetime extends React.Component {
  constructor(){
    super();
    this.updateTime = this.updateTime.bind(this);
  }

  state = {
    date:  undefined,
  }

  updateTime(){
    this.setState({date: (new Date()).toLocaleTimeString()});
  }

  componentWillMount() {
    this.timer = setInterval(this.updateTime, 1000);
    this.updateTime();
  }

  componentWillUnmount() {
    this.timer = clearInterval();
  }

  render(){
    return(
      <div className="wrapper">
          <span className="top-bar">{this.state.date}</span>
      </div>
    );
  }
}