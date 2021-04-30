import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand d-none d-md-block" href="/">Find My Course</a>
      <a className="nav-link" href="/">
        Home
        <span className="sr-only">(current)</span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Favorites</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Email" />
          <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </form>
      </div>
    </nav>
  );
}
