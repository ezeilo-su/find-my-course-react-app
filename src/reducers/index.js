import { combineReducers } from 'redux';
import signupReducer from './signup';
import authReducer from './auth';
import loginReducer from './login';
import courseReducer from './course';
// import favoriteReducer from './favorite';

const rootReducer = combineReducers({
  signup: signupReducer,
  courses: courseReducer,
  login: loginReducer,
  auth: authReducer,
});

export default rootReducer;
