import React, { Component } from 'react';
import { FetchHousingRegisterData } from '../../Gateways';
import OutputMessage from '../../Components/OutputMessage';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, searching: true };
  }

  async componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const biddingNumber = params.get('biddingNumber');

    const response = await FetchHousingRegisterData(
      biddingNumber ? biddingNumber : ''
    );

    this.setState({ data: response, searching: false });
  }

  render() {
    if (this.state.searching) {
      return <div>Searching...</div>;
    }

    if (!this.state.data.customerData) {
      return <div>No customer data</div>;
    }

    return (
      <>
        <OutputMessage housingRegisterData={this.state.data} />
      </>
    );
  }
}
