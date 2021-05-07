import React from 'react';
import PropTypes from 'prop-types';

function AuthError({ error }) {
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

export default AuthError;

AuthError.propTypes = {
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
};
