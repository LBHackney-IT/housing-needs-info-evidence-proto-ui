import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biddingNumber: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  searchLink() {
    if (this.state.biddingNumber) {
      return `/search?biddingNumber=${this.state.biddingNumber}`;
    }
    return '';
  }

  render() {
    return (
      <>
        <h1>Housing register waiting status</h1>
        <br />
        <section className="lbh-page-announcement">
          <h3 className="lbh-page-announcement__title">Use this tool to:</h3>
          <div className="lbh-page-announcement__content">
            <ul>
              <li>Find your current position on the register</li>
              <li>Estimate your wait time</li>
              <li>View recommended housing options</li>
            </ul>
          </div>
        </section>
        <form action={this.searchLink()}>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="biddingNumber">
              Bidding Number
            </label>
            <span id="event-name-hint" className="govuk-hint lbh-hint">
              Don't know your bidding number? <a href="#/">Contact Us</a>
            </span>
            <input
              className="govuk-input"
              type="text"
              name="biddingNumber"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="govuk-form-group">
            <button className="govuk-button lbh-button" type="submit">
              Search
            </button>
          </div>
        </form>
      </>
    );
  }
}
