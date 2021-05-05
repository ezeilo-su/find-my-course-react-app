import { combineReducers } from 'redux';
import signupReducer from './signup';
import authReducer from './auth';
import loginReducer from './login';
import courseReducer from './course';
import addFavReducer from './favorites/addFav';
import favoritesReducer from './favorites/favorites';
import fetchFavReducer from './favorites/fetchFavs';
import removeFavReducer from './favorites/removeFav';

const rootReducer = combineReducers({
  signup: signupReducer,
  courses: courseReducer,
  login: loginReducer,
  auth: authReducer,
  addFav: addFavReducer,
  favorites: favoritesReducer,
  fetchFavs: fetchFavReducer,
  removeFav: removeFavReducer,
});

export default rootReducer;
