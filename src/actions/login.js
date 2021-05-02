import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actionTypes/index';

import auth from './auth';
import REQ_HEADER from '../constants/constants';

const axios = require('axios');

const LOGIN_URL = 'https://findmycourse.herokuapp.com/api//v1/login';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

const loginUser = (user) => async (dispatch) => {
  dispatch(loginRequest);
  try {
    const { data } = await axios.post(LOGIN_URL, {
      username: user.username,
      password: user.password,
    }, REQ_HEADER);

    localStorage.setItem('loggedInUser', JSON.stringify(data));
    dispatch(loginSuccess({
      token: data.token,
      username: data.username,
    }));

    dispatch(auth({
      status: true,
      token: user.token,
      username: user.username,
    }));
  } catch {
    dispatch(loginFailure(['Invalid login. Try again!']));
  }
};

export default loginUser;
