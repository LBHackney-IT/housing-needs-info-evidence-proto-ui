import React, { Component } from 'react';

export default class Recommendations extends Component {
  render() {
    let title = 'Our recommendation: Look at other solutions';
    let message =
      'To help you find settled accommodation as soon as possible, we can support you in finding a home in the private rented sector or through other social housing schemes.';
    let buttonText = 'View options';
    let content = (
      <div>
        <div className="row" style={{ marginBottom: '50px' }}>
          <h4>Find privately rented accommodation</h4>
          <p>
            Find out how to look for your own property, and how the Council may
            be able to assist your move
          </p>
          <details
            className="govuk-details lbh-details"
            data-module="govuk-details"
          >
            <summary className="govuk-details__summary2 govuk-button lbh-button">
              <span className="govuk-details__summary-text2">
                Find privately rented accommodation
              </span>
            </summary>
            <div className="govuk-details__text">
              <strong>
                If you decide to look for privately rented accommodation, the
                Council may be able to provide the following assistance:
              </strong>
              <ul>
                <li>1 month rent in advance</li>
                <li>Security deposit paid</li>
                <li>Landlord compliancy check</li>
                <li>Longest possible tenancy terms</li>
                <li>Pre-inspection of the property</li>
                <li>Practical and financial help with removals</li>
                <li>
                  Transport costs for viewing and moving it outside of London
                </li>
                <li>
                  Financial assistance to provide white goods if they are not
                  provided by the landlord
                </li>
              </ul>
              <div>
                <p>
                  <strong>Attend a training course</strong>
                </p>
                <p>
                  The council provide free monthly tenancy training sessions for
                  those wishing to find their own accommodation. To enquire
                  about attending the next course, please{' '}
                  <a href="/#">contact us</a>.
                </p>
              </div>
            </div>
          </details>
        </div>
        <div className="row">
          <h4>Alternative social housing schemes</h4>
          <p>
            Depending on your circumstances, you may be eligible to join
            alternative schemes to find you settled accommodation more quickly
            in other parts of London, or further afield
          </p>
          <details
            className="govuk-details lbh-details"
            data-module="govuk-details"
          >
            <summary className="govuk-details__summary2 govuk-button lbh-button">
              <span className="govuk-details__summary-text2">
                Available schemes for current tenants
              </span>
            </summary>
            <div className="govuk-details__text">etc etc</div>
          </details>
          <div className="row">
            <br />
          </div>
          <details
            className="govuk-details lbh-details"
            data-module="govuk-details"
          >
            <summary className="govuk-details__summary2 govuk-button lbh-button">
              <span className="govuk-details__summary-text2">
                Other available schemes
              </span>
            </summary>
            <div className="govuk-details__text">etc etc</div>
          </details>
        </div>
      </div>
    );

    if (this.props.waitTime.years < 1 && this.props.waitTime.months < 7) {
      title = 'Our recommendation: Learn how to bid effectively';
      message = `To put yourself in the best position to receive a housing offer, it's important to know how to bid for properties effectively`;
      buttonText = 'Tips for bidding';
      content = (
        <div>
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
      <div className="recommendations">
        <section className="lbh-page-announcement">
          <h2 className="lbh-page-announcement__title">{title}</h2>
          <div className="lbh-page-announcement__content">
            <p>{message}</p>
          </div>
          <details
            className="govuk-details lbh-details"
            data-module="govuk-details"
          >
            <summary className="govuk-details__summary2 govuk-button lbh-button">
              <span className="govuk-details__summary-text2">{buttonText}</span>
            </summary>
            <div className="govuk-details__text">{content}</div>
          </details>
        </section>
      </div>
    );
  }
}
