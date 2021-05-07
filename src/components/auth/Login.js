import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import loginUser from '../../actions/login';
import AuthError from './AuthError';
import './Login.css';

function Login() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const auth = useSelector((state) => state.auth);

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({
      ...state,
    }));
  };

  if (auth.status) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }

  return (
    <div className="container-fluid">
      { login.error && <AuthError error={login.error} /> }
      <form className="px-4 py-3 col-md-4 login-form mt-4" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>

    </div>
  );
}

export default Login;
