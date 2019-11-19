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
      <div className="lbh-container">
        <h1>Welcome to Information and Evidence</h1>
        <br />
        <form action={this.searchLink()}>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="biddingNumber">
              Bidding Number
            </label>
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
      </div>
    );
  }
}
