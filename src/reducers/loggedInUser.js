import { LOGIN_STATUS } from '../actionTypes/index';

const initialState = {
  token: null,
  username: null,
  loggedIn: false,
};

const loggedInUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_STATUS:
      return {
        ...payload,
      };

    default:
      return state;
  }
};

export default loggedInUserReducer;
