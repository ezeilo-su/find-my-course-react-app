import env from 'react-dotenv';

export const REQ_HEADER = {
  header: {
    Authorization: `Bearer ${env.AUTH_TOKEN}`,
  },
};

// export const COURSE_URL = 'http://localhost:3001/api/v1/courses';
// export const COURSES_INDEX_URL = 'http://localhost:3001/api/v1/courses';
// export const LOGIN_URL = 'http://127.0.0.1:3001/api//v1/login';
// export const SIGNUP_URL = 'http://127.0.0.1:3001/api//v1/signup';

export const COURSE_URL = 'https://findmycourse.herokuapp.com/api/v1/courses';
export const COURSES_INDEX_URL = 'https://findmycourse.herokuapp.com/api/v1/courses';
export const LOGIN_URL = 'https://findmycourse.herokuapp.com/api//v1/login';
export const SIGNUP_URL = 'https://findmycourse.herokuapp.com/api//v1/signup';
