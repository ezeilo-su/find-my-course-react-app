import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actionTypes/index';

const initialState = {
  loading: false,
  token: '',
  error: '',
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        loading: false,
        token: payload,
        error: '',
      };

    case LOGIN_FAILURE:
      return {
        loading: false,
        token: '',
        error: payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
