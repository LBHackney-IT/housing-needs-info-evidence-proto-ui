import React, { Component } from 'react';
import {
  bands,
  getOverallPosition,
  getEffectivePropertyCount,
  getWaitTime,
  getAddedAheadOfYouCount
} from '../../../Lib/WaitingListHelpers';

const getWaitingListSection = function(d) {
  return (
    <>
      <p>The waiting list for this number of bedrooms looks like:</p>
      {d.customerData.band === bands.URG && (
        <p>Urgent: you are in position {d.customerData.position}</p>
      )}
      {d.customerData.band === bands.HOM && (
        <>
          <p>Urgent: {d.listState.URG[d.customerData.bedrooms]}</p>
          <p>
            Homeless + Priority: you are in position {d.customerData.position}
          </p>
        </>
      )}
      {d.customerData.band === bands.GEN && (
        <>
          <p>Urgent: {d.listState.URG[d.customerData.bedrooms]}</p>
          <p>Homeless + Priority: {d.listState.HOM[d.customerData.bedrooms]}</p>
          <p>General: you are in position {d.customerData.position}</p>
        </>
      )}
    </>
  );
};

export default class OutputMessage extends Component {
  render() {
    const d = this.props.housingRegisterData;
    const waitTime = getWaitTime(d);
    return (
      <div>
        <p>You are in the {d.customerData.band} band</p>
        <p>You are waiting for a {d.customerData.bedrooms} bedroom property</p>
        {getWaitingListSection(d)}
        <p>
          This means there are {getOverallPosition(d) - 1} people ahead of you
          in the list
        </p>
        <p>
          There were {d.newProperties[d.customerData.bedrooms]} new properties
          last year of this size
        </p>
        {d.customerData.band !== bands.URG && (
          <p>
            There were {getAddedAheadOfYouCount(d)} new people added to bands
            ahead of you last year
          </p>
        )}
        <p>
          This means there were effectively {getEffectivePropertyCount(d)} new
          properties taking people off the list last year
        </p>
        <p>
          At that rate it will take {waitTime.years} years {waitTime.months}{' '}
          months for you to get to the top of your band and get a property
        </p>
      </div>
    );
  }
}
