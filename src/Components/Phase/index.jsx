import React, { Component } from 'react';

export default class Phase extends Component {
  render() {
    return (
      <div className="govuk-phase-banner lbh-phase-banner lbh-container">
        <p className="govuk-phase-banner__content">
          <strong className="govuk-tag govuk-phase-banner__content__tag">
            Alpha
          </strong>
          <span className="govuk-phase-banner__text">
            This is a new service - your{' '}
            <a href="https://docs.google.com/forms/d/1IzT5uqqg6bVaAdZt1c9O7nXALCWpJuDkOxUm9XBYiLc/prefill">
              feedback
            </a>{' '}
            will help us to improve it.
          </span>
        </p>
      </div>
    );
  }
}
