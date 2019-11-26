import React, { Component } from 'react';
import './index.css';

export default class ProgressBar extends Component {
  render() {
    const progress = (this.props.overallPosition / this.props.totalCount) * 100;

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
