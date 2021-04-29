import { LOGIN_STATUS } from '../actionTypes/index';

const initialState = {
  token: null,
};

const loggedInUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_STATUS:
      return {
        token: payload,
      };

    default:
      return state;
  }
};

export default loggedInUserReducer;
