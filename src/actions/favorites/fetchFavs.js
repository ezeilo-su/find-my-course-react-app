import {
  FETCH_FAV_REQUEST,
  FETCH_FAV_SUCCESS,
  FETCH_FAV_FAILURE,
} from '../../actionTypes/index';
import { getRequestOptions } from '../../utils/utils';

import { FAV_URL } from '../../constants/constants';
import favorites from './favorites';

const axios = require('axios');

export const fetchFavRequest = () => ({
  type: FETCH_FAV_REQUEST,
});

export const fetchFavSuccess = (favorite) => ({
  type: FETCH_FAV_SUCCESS,
  payload: favorite,
});

export const fetchFavFailure = (error) => ({
  type: FETCH_FAV_FAILURE,
  payload: error,
});

const fetchFavs = (auth) => async (dispatch) => {
  dispatch(fetchFavRequest);
  try {
    if (!auth?.token) {
      throw new Error('ACCESS DENIED!');
    }
    const { data: { data } } = await axios.get(FAV_URL, getRequestOptions(auth.token));
    const favCourses = data.reduce((acc, item) => {
      acc.push({
        title: item.attributes.title,
        description: item.attributes.description,
        image_url: item.attributes.image_url,
        duration: item.attributes.duration,
        slug: item.attributes.slug,
      });
      return acc;
    }, []);
    dispatch(fetchFavSuccess(favCourses));
    dispatch(favorites(favCourses));
  } catch {
    dispatch(fetchFavFailure(true));
  }
};

export default fetchFavs;
