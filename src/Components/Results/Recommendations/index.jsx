import React, { Component } from 'react';

export default class Recommendations extends Component {
  render() {
    let title = 'Our recommendation: Look at other options';
    let content =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    let buttonText = 'View options';

    if (this.props.waitTime.years < 1 && this.props.waitTime.months < 7) {
      title = 'Our recommendation: Look at other options';
      content = `To put yourself in the best position to receive a housing offer, it's important to know how to bid for properties effectively`;
      buttonText = 'Tips for bidding';
    }

    return (
      <section className="lbh-page-announcement">
        <h2 className="lbh-page-announcement__title">{title}</h2>
        <div className="lbh-page-announcement__content">
          <p>{content}</p>
          <button className="govuk-button lbh-button">{buttonText}</button>
        </div>
      </section>
    );
  }
}
