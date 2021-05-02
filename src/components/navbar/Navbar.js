import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from '../dashboard/Dashboard';

export default function Navbar() {
  const auth = useSelector((state) => state.auth);

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
          {/* <li className="nav-item">
            { !auth.status && <Link to="/signup" className="nav-link">Register</Link> }
          </li> */}
        </ul>
        { auth.status ? <Dashboard username={auth.username} avatarUrl="/broken-image.jpg" /> : <Link to="/login">Login</Link> }
        { auth.status && <Link to="/logout" className="ml-4">Logout</Link> }
      </div>
      { !auth.status && (
      <Link
        to="/signup"
        className="nav-link text-decoration-none"
      >
        Register
      </Link>
      ) }
    </nav>
  );
}
