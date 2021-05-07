import React from 'react';
import PropTypes from 'prop-types';

function SignupError({ error }) {
  return (
    <div>
      { error.map((msg, idx) => (
        <p
          key={`error-${idx + 1}`}
          className="alert alert-danger"
        >
          {msg}
        </p>
      ))}
    </div>
  );
}

export default SignupError;

SignupError.propTypes = {
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};
