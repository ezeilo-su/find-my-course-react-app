import { LOGIN_STATUS } from '../actionTypes/index';

const loggedInUser = (currentUser) => ({
  type: LOGIN_STATUS,
  payload: currentUser,
});

export default loggedInUser;
