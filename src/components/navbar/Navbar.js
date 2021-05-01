import React from 'react';
import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../auth/LoginForm';
import Dashboard from '../dashboard/Dashboard';

export default function Navbar() {
  const user = useSelector((state) => state.loggedInUser);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pr-4">
      <a className="navbar-brand" href="/">Find My Course</a>
      <div className="nav-item active">
        <a className="nav-link" href="/">
          Home
          <span className="sr-only">(current)</span>
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Favorites</a>
          </li>
          <li className="nav-item">
            { !user.loggedIn && <Link to="/signup" className="nav-link">Register</Link> }
          </li>
        </ul>
        { user.loggedIn ? <Dashboard username={user.username} avatarUrl="/broken-image.jpg" /> : <LoginForm /> }
        { user.loggedIn && <Link to="/logout" className="ml-4">Logout</Link> }
      </div>
    </nav>
  );
}
