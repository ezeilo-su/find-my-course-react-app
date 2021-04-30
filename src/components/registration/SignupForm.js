import React from 'react';

function SignupForm() {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Email" />
      <input className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
    </form>
  );
}

export default SignupForm;
