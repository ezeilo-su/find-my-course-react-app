import { combineReducers } from 'redux';
import courseReducer from './course';
import favoriteReducer from './favorite';

const rootReducer = combineReducers({
  courses: courseReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
