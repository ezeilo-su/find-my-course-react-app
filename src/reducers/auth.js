import { AUTH_STATUS } from '../actionTypes/index';

const initialState = {
  token: '',
  username: '',
  status: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_STATUS:
      return {
        ...payload,
      };

    default:
      return state;
  }
};

export default authReducer;
