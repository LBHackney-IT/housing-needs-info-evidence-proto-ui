import React, { Component } from 'react';

export default class WaitTime extends Component {
  render() {
    return (
      <div className="wait-time">
        <p>Your estimated wait time is currently</p>
        <p className="time">
          {this.props.waitTime.years} years {this.props.waitTime.months} months
        </p>
      </div>
    );
  }
}
