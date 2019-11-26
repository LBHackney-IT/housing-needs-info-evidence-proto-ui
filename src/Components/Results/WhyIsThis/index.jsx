import React, { Component } from 'react';

export default class WhyIsThis extends Component {
  render() {
    return (
      <div className="why-is-this">
        <details className="govuk-details" data-module="govuk-details">
          <summary className="govuk-details__summary">
            <span className="govuk-details__summary-text">Why is this?</span>
          </summary>
          <div className="govuk-details__text">
            <div className="row">
              <div className="column">
                <WhyIsThisHighlight
                  imageSrc="assets/images/progress/application.svg"
                  figure={this.props.housingRegisterCount}
                  text="Households are waiting for social housing in Hackney"
                />
              </div>
              <div className="column">
                <WhyIsThisHighlight
                  imageSrc="assets/images/progress/family.svg"
                  figure={this.props.aheadOfYou}
                  text={`People ahead of you waiting for a ${this.props.bedrooms} bedroom property`}
                />
              </div>
              <div className="column">
                <WhyIsThisHighlight
                  imageSrc="assets/images/progress/apartment.svg"
                  figure={this.props.propertyCount}
                  text={`${this.props.bedrooms} bedroom properties became available in the last 12 months`}
                />
              </div>
            </div>
          </div>
        </details>
      </div>
    );
  }
}

export class WhyIsThisHighlight extends Component {
  render() {
    return (
      <div className="highlight">
        <div className="highlight-header">
          <div className="highlight-image">
            <img src={this.props.imageSrc} alt="" />
          </div>
          {this.props.figure}
        </div>
        <div className="highlight-text">{this.props.text}</div>
      </div>
    );
  }
}
