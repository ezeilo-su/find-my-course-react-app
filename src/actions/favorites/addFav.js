import {
  ADD_FAV_REQUEST,
  ADD_FAV_SUCCESS,
  ADD_FAV_FAILURE,
} from '../actionTypes/index';
import formatErrorMessages from '../../utils/utils';
import getRequestOptions from '../../utils/utils';
import addFavToLocalStorage from '../../utils/utils';
import { ADD_FAV_URL } from '../constants/constants';

const axios = require('axios');

export const addFavRequest = () => ({
  type: ADD_FAV_REQUEST,
});

export const addFavSuccess = (user) => ({
  type: ADD_FAV_SUCCESS,
  payload: favorite,
});

export const addFavFailure = (error) => ({
  type: ADD_FAV_FAILURE,
  payload: error,
});

const addFavorites = (courseSlug, authToken) => async (dispatch) => {
  dispatch(addFavRequest);
  try {
    const { data: { data } } = await axios.post(ADD_FAV_URL, {
      favorite: {
        course_slug: courseSlug,
      },
    }, getRequestOptions(authToken));
    console.log('Adding to local storage...', data);
    // addFavToLocalStorage(data.attributes.slug);
    // dispatch(addFavSuccess(data.attributes));
  } catch ({ response: { data: { error } } }) {
    dispatch(addFavFailure(formatErrorMessages(error)));
  }
};

export default addFavorites;
