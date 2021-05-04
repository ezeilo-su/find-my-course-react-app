import {
  ADD_FAV_REQUEST,
  ADD_FAV_SUCCESS,
  ADD_FAV_FAILURE,
} from '../../actionTypes/index';

const initialState = {
  loading: false,
  favorite: null,
  error: false,
};

const addFavReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_FAV_SUCCESS:
      return {
        loading: false,
        favorite: payload,
        error: '',
      };

    case ADD_FAV_FAILURE:
      return {
        loading: false,
        favorite: null,
        error: payload,
      };

    default:
      return state;
  }
};

export default addFavReducer;
