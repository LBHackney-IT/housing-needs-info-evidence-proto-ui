import React, { Component } from 'react';
import { FetchHousingRegisterData } from '../../Gateways';

import ProgressBar from '../../Components/Results/ProgressBar';

import {
  getWaitTime,
  getOverallPosition,
  getHousingRegisterCountForBedroomSize,
  getNewProperyCount,
  getHousingRegisterCount
} from '../../Lib/WaitingListHelpers';
import YourApplication from 'Components/Results/YourApplication';
import HowAccurate from 'Components/Results/HowAccurate';
import Recommendations from 'Components/Results/Recommendations';
import WhyIsThis from 'Components/Results/WhyIsThis';
import WaitTime from 'Components/Results/WaitTime';

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
        <div className="row">
          <div className="column">
            <div className="warning-wrapper">
              <div className="govuk-warning-text lbh-warning-text">
                <span className="govuk-warning-text__icon" aria-hidden="true">
                  !
                </span>
                <div className="govuk-warning-text__text">
                  <span className="govuk-warning-text__assistive">Warning</span>
                  Some people with complex medical needs may wait longer than
                  this.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <WaitTime waitTime={waitTime} />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <WhyIsThis
              aheadOfYou={getOverallPosition(this.state.data) - 1}
              bedrooms={this.state.data.customerData.bedrooms}
              housingRegisterCount={getHousingRegisterCount(this.state.data)}
              propertyCount={getNewProperyCount(this.state.data)}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <ProgressBar
              overallPosition={getOverallPosition(this.state.data)}
              totalCount={getHousingRegisterCountForBedroomSize(
                this.state.data
              )}
            />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <Recommendations waitTime={waitTime} />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <YourApplication
              biddingNumber={this.state.biddingNumber}
              data={this.state.data}
            />
          </div>
          <div className="column">
            <HowAccurate />
          </div>
        </div>
      </>
    );
  }
}
