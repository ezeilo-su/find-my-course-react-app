import { combineReducers } from 'redux';
import signupReducer from './signup';
import loggedInUserReducer from './loggedInUser';
import courseReducer from './course';
// import favoriteReducer from './favorite';

const rootReducer = combineReducers({
  signup: signupReducer,
  courses: courseReducer,
  loggedInUser: loggedInUserReducer,
});

export default rootReducer;
