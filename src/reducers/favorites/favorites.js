import { FAVORITES } from '../../actionTypes/index';

const initialState = [];

const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAVORITES:
      return payload;

    default:
      return state;
  }
};

export default favoritesReducer;
