import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from '../actionTypes/index';

const axios = require('axios');

const SIGNUP_URL = 'http://127.0.0.1:3001/api//v1/signup';

export const signupRequest = () => ({
  type: ADD_USER_REQUEST,
});

export const signupSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: ADD_USER_FAILURE,
  payload: error,
});

const signupUser = (user) => async (dispatch) => {
  dispatch(signupRequest);
  try {
    const res = await axios.post(SIGNUP_URL, {
      user: {
        username: user.username,
        password: user.password,
        password_confirmation: user.password_confirmation,
      },
    });
    dispatch(signupSuccess(res.data));
  } catch (err) {
    dispatch(signupFailure(err.response.data.error));
  }
};

export default signupUser;
