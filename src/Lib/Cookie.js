import Cookies from 'js-cookie';
// import jwt from 'jsonwebtoken';

export const isLoggedIn = function() {
  const hackneyToken = Cookies.get('hackneyToken');
  if (!hackneyToken) return false;
  return true;
  // const payload = jwt.decode(hackneyToken);
  // return (
  //   payload &&
  //   payload.groups &&
  //   payload.groups.indexOf('housingneeds-info-evidence-beta') > -1
  // );
};

export const hackneyToken = function() {
  return Cookies.get('hackneyToken');
};
