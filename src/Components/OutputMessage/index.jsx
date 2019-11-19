import React, { Component } from 'react';

const bands = {
  URG: 'URG',
  HOM: 'HOM',
  PRY: 'PRY',
  GEN: 'GEN'
};

const getWaitingListSection = function(d) {
  return (
    <>
      <p>The waiting list for this number of bedrooms looks like:</p>
      {d.customerData.band === bands.URG && (
        <p>Urgent: you are in position {d.customerData.position}</p>
      )}
      {(d.customerData.band === bands.HOM ||
        d.customerData.band === bands.PRY) && (
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
          <p>
            Homeless + Priority:{' '}
            {d.listState.HOM[d.customerData.bedrooms] +
              d.listState.PRY[d.customerData.bedrooms]}
          </p>
          <p>General: you are in position {d.customerData.position}</p>
        </>
      )}
    </>
  );
};

const getCurrentAheadOfYouCount = function(d) {
  if (d.customerData.band === bands.URG) {
    return d.customerData.position - 1;
  }

  if (d.customerData.band === bands.HOM || d.customerData.band === bands.PRY) {
    return (
      d.listState.URG[d.customerData.bedrooms] + d.customerData.position - 1
    );
  }

  if (d.customerData.band === bands.GEN) {
    return (
      d.listState.URG[d.customerData.bedrooms] +
      d.listState.HOM[d.customerData.bedrooms] +
      d.listState.PRY[d.customerData.bedrooms] +
      d.customerData.position -
      1
    );
  }

  return 0;
};

const getEffectivePropertyCount = function(d) {
  return d.newProperties[d.customerData.bedrooms] - getAddedAheadOfYouCount(d);
};

const getYearsAndMonths = function(d) {
  const totalMonths = Math.ceil(
    (getCurrentAheadOfYouCount(d) / getEffectivePropertyCount(d)) * 12
  );

  return `${Math.floor(totalMonths / 12)} years ${totalMonths % 12} months`;
};

const getAddedAheadOfYouCount = function(d) {
  if (d.customerData.band === bands.HOM || d.customerData.band === bands.PRY) {
    return d.newMembers.URG[d.customerData.bedrooms];
  }

  if (d.customerData.band === bands.GEN) {
    return (
      d.newMembers.URG[d.customerData.bedrooms] +
      d.newMembers.HOM[d.customerData.bedrooms] +
      d.newMembers.PRY[d.customerData.bedrooms]
    );
  }

  return 0;
};

export default class OutputMessage extends Component {
  render() {
    const d = this.props.housingRegisterData;
    return (
      <div>
        <p>You are in the {d.customerData.band} band</p>
        <p>You are waiting for a {d.customerData.bedrooms} bedroom property</p>
        {getWaitingListSection(d)}
        <p>
          This means there are {getCurrentAheadOfYouCount(d)} people ahead of
          you in the list
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
          At that rate it will take {getYearsAndMonths(d)} for you to get to the
          top of your band and get a property
        </p>
      </div>
    );
  }
}
