export const bands = {
  URG: 'URG',
  HOM: 'HOM',
  PRY: 'PRY',
  GEN: 'GEN',
  RES: 'RES'
};

export const getOverallPosition = function(d) {
  if (d.customerData.band === bands.URG) {
    return d.customerData.position;
  }

  // need to join this data together
  if (d.customerData.band === bands.HOM || d.customerData.band === bands.PRY) {
    return d.listState.URG[d.customerData.bedrooms] + d.customerData.position;
  }

  if (d.customerData.band === bands.GEN) {
    return (
      d.listState.URG[d.customerData.bedrooms] +
      d.listState.HOM[d.customerData.bedrooms] +
      d.listState.PRY[d.customerData.bedrooms] +
      d.customerData.position
    );
  }

  if (d.customerData.band === bands.RES) {
    return (
      d.listState.URG[d.customerData.bedrooms] +
      d.listState.HOM[d.customerData.bedrooms] +
      d.listState.PRY[d.customerData.bedrooms] +
      d.listState.GEN[d.customerData.bedrooms] +
      d.customerData.position
    );
  }

  return 0;
};

export const getHousingRegisterCountForBedroomSize = function(d) {
  return (
    d.listState.URG[d.customerData.bedrooms] +
    d.listState.HOM[d.customerData.bedrooms] +
    d.listState.PRY[d.customerData.bedrooms] +
    d.listState.GEN[d.customerData.bedrooms] +
    d.listState.RES[d.customerData.bedrooms]
  );
};

export const getHousingRegisterCount = function(d) {
  return (
    Object.values(d.listState.URG).reduce((a, b) => a + b, 0) +
    Object.values(d.listState.HOM).reduce((a, b) => a + b, 0) +
    Object.values(d.listState.PRY).reduce((a, b) => a + b, 0) +
    Object.values(d.listState.GEN).reduce((a, b) => a + b, 0) +
    Object.values(d.listState.RES).reduce((a, b) => a + b, 0)
  );
};

export const getNewProperyCount = function(d) {
  return d.newProperties[d.customerData.bedrooms];
};

export const getEffectivePropertyCount = function(d) {
  return d.newProperties[d.customerData.bedrooms] - getAddedAheadOfYouCount(d);
};

export const getWaitTime = function(d) {
  const totalMonths = Math.ceil(
    ((getOverallPosition(d) - 1) / getEffectivePropertyCount(d)) * 12
  );

  return {
    months: totalMonths % 12,
    years: Math.floor(totalMonths / 12)
  };
};

export const getAddedAheadOfYouCount = function(d) {
  const urg = d.newMembers.URG[d.customerData.bedrooms];
  const hom = d.newMembers.HOM[d.customerData.bedrooms];
  const pry = d.newMembers.PRY[d.customerData.bedrooms];

  if (d.customerData.band === bands.HOM || d.customerData.band === bands.PRY) {
    return urg ? urg : 0;
  }

  if (d.customerData.band === bands.GEN) {
    return (urg ? urg : 0) + (hom ? hom : 0) + (pry ? pry : 0);
  }

  return 0;
};
