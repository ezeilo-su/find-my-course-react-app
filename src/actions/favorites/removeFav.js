import {
  REMOVE_FAV_REQUEST,
  REMOVE_FAV_SUCCESS,
  REMOVE_FAV_FAILURE,
} from '../../actionTypes/index';
import { getRequestOptions } from '../../utils/utils';

import { FAV_URL } from '../../constants/constants';
import favorites from './favorites';

const axios = require('axios');

export const removeFavRequest = () => ({
  type: REMOVE_FAV_REQUEST,
});

export const removeFavSuccess = (favorite) => ({
  type: REMOVE_FAV_SUCCESS,
  payload: favorite,
});

export const removeFavFailure = (error) => ({
  type: REMOVE_FAV_FAILURE,
  payload: error,
});

const removeFavorite = (course, auth) => async (dispatch, getState) => {
  dispatch(removeFavRequest);
  try {
    if (!auth?.token) {
      throw new Error('ACCESS DENIED!');
    }
    await axios.delete(`${FAV_URL}/${course.slug}`, getRequestOptions(auth.token));
    const favs = getState().favorites.filter((fav) => fav.slug !== course.slug);
    dispatch(removeFavSuccess());
    dispatch(favorites(favs));
  } catch (error) {
    dispatch(removeFavFailure(true));
  }
};

export default removeFavorite;
