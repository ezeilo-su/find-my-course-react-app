import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import auth from '../../actions/auth';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('favCourses');
    dispatch(auth());
  }, []);

  return (
    <Redirect
      to={{
        pathname: '/',
        message: "You've been signed out!",
      }}
    />
  );
}

export default Logout;
