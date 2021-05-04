import {
  ADD_FAV_REQUEST,
  ADD_FAV_SUCCESS,
  ADD_FAV_FAILURE,
} from '../../actionTypes/index';
import { getRequestOptions } from '../../utils/utils';

import { ADD_FAV_URL } from '../../constants/constants';
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

const addFavorites = (course, authToken) => async (dispatch) => {
  dispatch(addFavRequest);
  try {
    await axios.post(ADD_FAV_URL, {
      favorite: {
        course_slug: course.slug,
      },
    }, getRequestOptions(authToken));
    dispatch(addFavSuccess(course));
    dispatch(favorites([course]));
  } catch (error) {
    dispatch(addFavFailure(true));
  }
};

export default addFavorites;
