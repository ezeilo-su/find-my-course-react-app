import { FAVORITES } from '../../actionTypes/index';

const favorites = (fav) => ({
  type: FAVORITES,
  payload: fav,
});

export default favorites;
