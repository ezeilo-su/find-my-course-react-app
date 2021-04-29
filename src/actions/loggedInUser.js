import { LOGIN_STATUS } from '../actionTypes/index';

const loggedInUser = (token) => ({
  type: LOGIN_STATUS,
  payload: token,
});

export default loggedInUser;
