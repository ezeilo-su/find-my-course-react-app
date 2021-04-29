import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
} from '../actionTypes/index';

const axios = require('axios');

export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST,
});

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: error,
});

const fetchCourses = (url) => async (dispatch) => {
  dispatch(fetchCoursesRequest);
  try {
    const { data: { data } } = await axios.get(url);
    dispatch(fetchCoursesSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(fetchCoursesFailure(err.response.data.error));
  }
};

export default fetchCourses;
