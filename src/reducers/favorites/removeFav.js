import {
  REMOVE_FAV_REQUEST,
  REMOVE_FAV_SUCCESS,
  REMOVE_FAV_FAILURE,
} from '../../actionTypes/index';

const initialState = {
  loading: false,
  favorite: null,
  error: false,
};

const removeFavReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_FAV_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_FAV_SUCCESS:
      return {
        loading: false,
        favorite: payload,
        error: '',
      };

    case REMOVE_FAV_FAILURE:
      return {
        loading: false,
        favorite: null,
        error: payload,
      };

    default:
      return state;
  }
};

export default removeFavReducer;
