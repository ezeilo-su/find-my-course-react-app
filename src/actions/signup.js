import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
} from '../actionTypes/index';
import { formatErrorMessages } from '../utils/utils';
import { SIGNUP_URL } from '../constants/constants';

const axios = require('axios');

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
    const { data } = await axios.post(SIGNUP_URL, {
      user: {
        username: user.username,
        password: user.password,
        password_confirmation: user.password_confirmation,
      },
    });
    localStorage.setItem('loggedInUser', JSON.stringify(data));
    dispatch(signupSuccess({
      token: data.token,
      username: data.username,
    }));
  } catch ({ response: { data: { error } } }) {
    dispatch(signupFailure(formatErrorMessages(error)));
  }
};

export default signupUser;
