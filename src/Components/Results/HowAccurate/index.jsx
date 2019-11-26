import React, { Component } from 'react';

export default class HowAccurate extends Component {
  render() {
    return (
      <div>
        <h3>How accurate is this information?</h3>
        <p>
          This information provides an estimation of when you may be likely to
          be in a position to be offered housing, based on data from the last 30
          days. New applications who have a higher housing need will take
          priority, and so your wait time may increase or decrease next month.
        </p>
        <details className="govuk-details" data-module="govuk-details">
          <summary className="govuk-details__summary">
            <span className="govuk-details__summary-text">
              How this information is calculated
            </span>
          </summary>
          <div className="govuk-details__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </details>
      </div>
    );
  }
}
