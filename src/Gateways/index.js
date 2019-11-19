import FetchHousingRegisterData from './FetchHousingRegisterData';
import { hackneyToken } from '../Lib/Cookie';

const AuthHeader = {
  headers: {
    Authorization: `Bearer ${hackneyToken()}`,
    'Content-Type': 'application/json'
  }
};

export { AuthHeader, FetchHousingRegisterData };
