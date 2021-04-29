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
    const courses = data.reduce((acc, item) => {
      acc.push({
        title: item.attributes.title,
        description: item.attributes.description,
        image_url: item.attributes.image_url,
        duration: item.attributes.duration,
        slug: item.attributes.slug,
      });
      return acc;
    }, []);
    dispatch(fetchCoursesSuccess(courses));
  } catch (err) {
    dispatch(fetchCoursesFailure());
  }
};

export default fetchCourses;
