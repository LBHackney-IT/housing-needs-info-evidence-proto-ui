import React, { Component } from 'react';

export default class Recommendations extends Component {
  render() {
    let title = 'Our recommendation: Look at other options';
    let message =
      'Something about how quick it could be to rent privately and if Hackney might be able to provide assistance?';
    let buttonText = 'View options';
    let content = (
      <div>
        <h3>Our recommendations</h3>
        <div className="row">
          <div className="column">
            <h4>Find privately rented accommodation</h4>
            <p>
              Something about how quick it could be to rent privately and if
              Hackney might be able to provide assistance?
            </p>
            <button className="govuk-button lbh-button">
              Where to find properties
            </button>
          </div>
          <div className="column">
            <h4>Alternative social housing schemes</h4>
            <p>
              Something about how quick it could be to rent privately and if
              Hackney might be able to provide assistance?
            </p>
            <button className="govuk-button lbh-button">
              Available schemes
            </button>
          </div>
        </div>
      </div>
    );

    if (this.props.waitTime.years < 1 && this.props.waitTime.months < 7) {
      title = 'Our recommendation: Learn how to bid effectively';
      message = `To put yourself in the best position to receive a housing offer, it's important to know how to bid for properties effectively`;
      buttonText = 'Tips for bidding';
      content = (
        <div>
          <h3>Learn how to bid effectively</h3>
          <hr />
          <h4>
            Our top 3 tips for you to maximise your chances of receiving a house
            offer:
          </h4>
          <ol>
            <li>
              Ensure you don't have arrears on your rent account, otherwise you
              won't be able to successfully bid for secure accommodation
            </li>
            <li>
              Bid for lifted properties on higher floors. Ground and lower floor
              properties are in higher demand and often reserved for those
              medically assessed as requiring low level access
            </li>
            <li>
              Review your bids on Monday evenings to give you a more accurate
              indication of whether you are likely to be shortlisted for a
              property, and the opportunity to move your bid to another property
              for which you may have a greater chance of success
            </li>
          </ol>
          <button className="govuk-button lbh-button">
            Bid for properties
          </button>
        </div>
      );
    }

    return (
      <>
        <section className="lbh-page-announcement">
          <h2 className="lbh-page-announcement__title">{title}</h2>
          <div className="lbh-page-announcement__content">
            <p>{message}</p>
          </div>
          <details
            class="govuk-details lbh-details"
            data-module="govuk-details"
          >
            <summary class="govuk-details__summary2 govuk-button lbh-button">
              <span class="govuk-details__summary-text2">{buttonText}</span>
            </summary>
            <div class="govuk-details__text">{content}</div>
          </details>
        </section>
      </>
    );
  }
}
