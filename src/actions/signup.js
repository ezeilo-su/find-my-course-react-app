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

function formatErrorMessages(error) {
  return Object.keys(error)
    .reduce((keyAcc, key) => {
      const errs = error[key].reduce((errAcc, item) => {
        errAcc.push(`${key} ${item}`);
        return errAcc;
      }, []);
      return [...keyAcc, ...errs];
    }, []);
}

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
    localStorage.setItem('auth_token', data.token);
    dispatch(signupSuccess({
      token: data.token,
      username: data.username,
    }));
  } catch ({ response: { data: { error } } }) {
    dispatch(signupFailure(formatErrorMessages(error)));
  }
};

export default signupUser;
