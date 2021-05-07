import {
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAILURE,
} from '../actionTypes/index';

const initialState = {
  loading: false,
  courseList: [],
  error: '',
};

const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_COURSES_SUCCESS:
      return {
        loading: false,
        courseList: payload,
        error: '',
      };

    case FETCH_COURSES_FAILURE:
      return {
        loading: false,
        courseList: [],
        error: payload,
      };

    default:
      return state;
  }
};

export default courseReducer;
