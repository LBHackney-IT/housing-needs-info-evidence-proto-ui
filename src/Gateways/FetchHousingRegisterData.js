import { AuthHeader } from '.';

async function FetchHousingRegisterData(biddingNumber) {
  const query = biddingNumber ? `?biddingNumber=${biddingNumber}` : '';

  const response = await fetch(
    `${process.env.REACT_APP_HN_API_URL}/housing_register${query}`,
    AuthHeader
  );

  return await response.json();
}

export default FetchHousingRegisterData;
