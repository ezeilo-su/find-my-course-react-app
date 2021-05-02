import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actionTypes/index';

const initialState = {
  loading: false,
  user: {},
  error: null,
  loggedIn: false,
};

const LOGINReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        loading: false,
        user: payload,
        error: null,
        loggedIn: true,
      };

    case LOGIN_FAILURE:
      return {
        loading: false,
        user: {},
        error: payload,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default LOGINReducer;
