import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../../actions/index';

function Registration() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: '',
    password: '',
    password_confirmation: '',
    registrationError: '',
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
      username: state.username,
      password: state.password,
      password_confirmation: state.password_confirmation,
    }));
  };

  // setState((prevState) => ({ ...prevState, title: value }));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="username">Username:</label> */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={state.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />

        <input
          name="password_confirmation"
          type="password"
          placeholder="Password confirmation"
          value={state.password_confirmation}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;

// document.getElementById('new-book-form').reset();
