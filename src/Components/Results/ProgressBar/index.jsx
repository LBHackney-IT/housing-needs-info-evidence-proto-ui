import React, { Component } from 'react';
import './index.css';

export default class ProgressBar extends Component {
  render() {
    // round percentage down to nearest 10 for display purposes
    let progress =
      Math.floor(
        (100 - (this.props.overallPosition / this.props.totalCount) * 100) / 10
      ) * 10;

    if (progress === 0) {
      progress = 10;
    }

    return (
      <div className="progress">
        <div className="progress-image">
          <img src="assets/images/progress/application.svg" alt="" />
          <p>Application</p>
        </div>

        <div className="progress-bar-wrapper">
          <div className="progress-bar"></div>
          <div
            className="progress-bar__position"
            style={{ marginLeft: `${progress}%` }}
          >
            <div>
              <strong>Your position:</strong>{' '}
              <p>
                {this.props.overallPosition} out of {this.props.totalCount}
              </p>
            </div>
          </div>
        </div>
        <div className="progress-image">
          <img src="assets/images/progress/apartment.svg" alt="" />
          <p>Housing Offer</p>
        </div>
      </div>
    );
  }
}
