import {
  ADD_FAV_REQUEST,
  ADD_FAV_SUCCESS,
  ADD_FAV_FAILURE,
} from '../../actionTypes/index';
import { getRequestOptions } from '../../utils/utils';

import { FAV_URL } from '../../constants/constants';
import favorites from './favorites';

const axios = require('axios');

export const addFavRequest = () => ({
  type: ADD_FAV_REQUEST,
});

export const addFavSuccess = (favorite) => ({
  type: ADD_FAV_SUCCESS,
  payload: favorite,
});

export const addFavFailure = (error) => ({
  type: ADD_FAV_FAILURE,
  payload: error,
});

const addFavorites = (course, auth) => async (dispatch) => {
  dispatch(addFavRequest);
  try {
    if (!auth?.token) {
      throw new Error('ACCESS DENIED!');
    }
    await axios.post(FAV_URL, {
      favorite: {
        course_slug: course.slug,
      },
    }, getRequestOptions(auth.token));
    dispatch(addFavSuccess(course));
    dispatch(favorites([course]));
  } catch (error) {
    dispatch(addFavFailure(true));
  }
};

export default addFavorites;
