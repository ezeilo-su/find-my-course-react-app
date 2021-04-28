import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
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

    axios.post(
      'http://127.0.0.1:3001/api//v1/signup', {
        user: {
          username: state.username,
          password: state.password,
          password_confirmation: state.password_confirmation,
        },
      },
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
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
