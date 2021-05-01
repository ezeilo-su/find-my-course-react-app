import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import signupUser from '../../actions/signup';
import SignupError from './SignupError';
import loggedInUser from '../../actions/loggedInUser';

function Registration() {
  const dispatch = useDispatch();
  const signup = useSelector((state) => state.signup);

  const [state, setState] = useState({
    username: '',
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser({
      ...state,
    }));
  };

  if (signup.user.token) {
    const { user } = signup;
    user.loggedIn = true;
    dispatch(loggedInUser(user));

    return (
      <Redirect
        to={{
          pathname: '/',
          message: 'Account registration successful!',
        }}
      />
    );
  }

  return (
    <div className="container-fluid">
      { signup.error && <SignupError error={signup.error} /> }
      <form className="px-4 py-3 col-md-4" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="exampleDropdownFormEmail1">Email address</label> */}
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            value={state.username}
            onChange={handleChange}
            id="exampleDropdownFormEmail1"
            required
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="exampleDropdownFormPassword1">Password</label> */}
          <input
            className="form-control"
            id="exampleDropdownFormPassword1"
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="exampleDropdownFormPassword1">Password confirmation</label> */}
          <input
            className="form-control"
            id="exampleDropdownFormPassword1"
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={state.password_confirmation}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>

    </div>
  );
}

export default Registration;

// document.getElementById('new-book-form').reset();

// <form onSubmit={handleSubmit}>
// <input
//   type="text"
//   name="username"
//   placeholder="Username"
//   value={state.username}
//   onChange={handleChange}
//   required
// />

// <input
//   type="password"
//   name="password"
//   placeholder="Password"
//   value={state.password}
//   onChange={handleChange}
//   required
// />

// <input
//   name="password_confirmation"
//   type="password"
//   placeholder="Password confirmation"
//   value={state.password_confirmation}
//   onChange={handleChange}
//   required
// />
// <button type="submit">Register</button>
// </form>
