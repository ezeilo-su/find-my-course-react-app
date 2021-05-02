import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
} from '../actionTypes/index';

const axios = require('axios');

export const fetchCourseRequest = () => ({
  type: FETCH_COURSES_REQUEST,
});

export const fetchCourseSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchCourseFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: error,
});

const fetchCourse = (url, type) => async (dispatch) => {
  dispatch(fetchCourseRequest);
  try {
    let { data: { data } } = await axios.get(url);
    if (type === 'SHOW') {
      data = [data];
    }
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
    dispatch(fetchCourseSuccess(courses));
  } catch (err) {
    dispatch(fetchCourseFailure(err.message));
  }
};

export default fetchCourse;
