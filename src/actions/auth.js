import { AUTH_STATUS } from '../actionTypes/index';

const auth = (currentUser) => ({
  type: AUTH_STATUS,
  payload: currentUser,
});

export default auth;
