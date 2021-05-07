import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from '../actionTypes/index';

const initialState = {
  loading: false,
  user: {},
  error: null,
  loggedIn: false,
};

const signupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_USER_SUCCESS:
      return {
        loading: false,
        user: payload,
        error: null,
        loggedIn: true,
      };

    case ADD_USER_FAILURE:
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

export default signupReducer;
