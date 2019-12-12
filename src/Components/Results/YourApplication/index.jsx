import React, { Component } from 'react';

import {
  bands,
  getOverallPosition,
  getHousingRegisterCountForBedroomSize
} from '../../../Lib/WaitingListHelpers';

const styleBand = function(myBand, theirBand) {
  let theirBandString = 'Urgent';

  if (theirBand === bands.HOM) {
    theirBandString = 'Homeless & Priority';
  }
  if (theirBand === bands.GEN) {
    theirBandString = 'General';
  }

  if (myBand === theirBand) {
    return <strong>&#10004; {theirBandString}</strong>;
  } else {
    return <>&#x2718; {theirBandString}</>;
  }
};

export default class YourApplication extends Component {
  render() {
    return (
      <>
        <table className="govuk-table lbh-table">
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__header">Bidding number:</td>
              <td className="govuk-table__cell">{this.props.biddingNumber}</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__header">Your priority band:</td>
              <td className="govuk-table__cell">
                {styleBand(this.props.data.customerData.band, bands.URG)}
              </td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell"></td>
              <td className="govuk-table__cell">
                {' '}
                {styleBand(this.props.data.customerData.band, bands.HOM)}
              </td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell"></td>
              <td className="govuk-table__cell">
                {' '}
                {styleBand(this.props.data.customerData.band, bands.GEN)}
              </td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__header">Requirements:</td>
              <td className="govuk-table__cell">
                {this.props.data.customerData.bedrooms} bedroom
              </td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__header">Position:</td>
              <td className="govuk-table__cell">
                {getOverallPosition(this.props.data)} out of{' '}
                {getHousingRegisterCountForBedroomSize(this.props.data)}
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <div>
          {/* <p>
            <a href="#/">This information looks incorrect</a>
          </p> */}
          <p>
            <a href="https://hackney.gov.uk/housing-coc" target="_blank">
              My circumstances have changed
            </a>
          </p>
        </div>
      </>
    );
  }
}
