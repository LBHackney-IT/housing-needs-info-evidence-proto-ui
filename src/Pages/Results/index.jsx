import React, { Component } from 'react';
import { FetchHousingRegisterData } from '../../Gateways';

import ProgressBar from '../../Components/Results/ProgressBar';

import {
  getWaitTime,
  getOverallPosition,
  getTotalCount
} from '../../Lib/WaitingListHelpers';
import YourApplication from 'Components/Results/YourApplication';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { biddingNumber: '', data: {}, searching: true };
  }

  async componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const biddingNumber = params.get('biddingNumber');

    const response = await FetchHousingRegisterData(
      biddingNumber ? biddingNumber : ''
    );

    this.setState({
      biddingNumber: biddingNumber,
      data: response,
      searching: false
    });
  }

  render() {
    if (this.state.searching) {
      return <div>Searching...</div>;
    }

    if (!this.state.data.customerData) {
      return <div>No customer data</div>;
    }

    const waitTime = getWaitTime(this.state.data);

    return (
      <>
        <div className="govuk-warning-text lbh-warning-text">
          <span className="govuk-warning-text__icon" aria-hidden="true">
            !
          </span>
          <div className="govuk-warning-text__text">
            <span className="govuk-warning-text__assistive">Warning</span>
            Some people with complex medical needs may wait longer than this.
          </div>
        </div>

        <div className="wait-time">
          <p>Your estimated wait time is currently</p>
          <p>
            {waitTime.years} years {waitTime.months} months
          </p>
        </div>

        <details className="govuk-details" data-module="govuk-details">
          <summary className="govuk-details__summary">
            <span className="govuk-details__summary-text">Why is this?</span>
          </summary>
          <div className="govuk-details__text">ssd ksdnskdnsdsknd</div>
        </details>

        <ProgressBar
          overallPosition={getOverallPosition(this.state.data)}
          totalCount={getTotalCount(this.state.data)}
        />

        {waitTime.years < 1 && waitTime.months < 7 ? (
          <section className="lbh-page-announcement">
            <h3 className="lbh-page-announcement__title">
              Our recommendation: Learn how to bid effectively
            </h3>
            <div className="lbh-page-announcement__content">
              <p>
                To put yourself in the best position to receive a housing offer,
                it's important to know how to bid for properties effectively
              </p>
              <button className="govuk-button lbh-button">
                Tips for bidding
              </button>
            </div>
          </section>
        ) : (
          <section className="lbh-page-announcement">
            <h3 className="lbh-page-announcement__title">
              Our recommendation: Look at other options
            </h3>
            <div className="lbh-page-announcement__content">
              <p>Lorem ipsum</p>
            </div>

            <button className="govuk-button lbh-button">View options</button>
          </section>
        )}

        <YourApplication
          biddingNumber={this.state.biddingNumber}
          data={this.state.data}
        />

        <div>
          <h3>How accurate is this information?</h3>
          <p>
            This information provides an estimation of when you may be likely to
            be in a position to be offered housing, based on data from the last
            30 days. New applications who have a higher housing need will take
            priority, and so your wait time may increase or decrease next month.
          </p>
          <details className="govuk-details" data-module="govuk-details">
            <summary className="govuk-details__summary">
              <span className="govuk-details__summary-text">
                How this information is calculated
              </span>
            </summary>
            <div className="govuk-details__text">ssd ksdnskdnsdsknd</div>
          </details>
        </div>
      </>
    );
  }
}
