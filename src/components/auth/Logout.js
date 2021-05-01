import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loggedInUser from '../../actions/loggedInUser';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('loggedInUser');
    dispatch(loggedInUser(null));
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
