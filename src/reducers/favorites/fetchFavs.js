import {
  FETCH_FAV_REQUEST,
  FETCH_FAV_SUCCESS,
  FETCH_FAV_FAILURE,
} from '../../actionTypes/index';

const initialState = {
  loading: false,
  favorite: null,
  error: false,
};

const fetchFavReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FAV_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_FAV_SUCCESS:
      return {
        loading: false,
        favorite: payload,
        error: '',
      };

    case FETCH_FAV_FAILURE:
      return {
        loading: false,
        favorite: null,
        error: payload,
      };

    default:
      return state;
  }
};

export default fetchFavReducer;
