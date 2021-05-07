import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';

function Dashboard({ avatarUrl, username }) {
  return (
    <div className="d-flex align-items-center justify-space-between">
      <p className="p-0 m-0 mr-4">
        <span className="mr-2">User:</span>
        { username }
      </p>
      <Avatar className="ml-2" src={avatarUrl} />
    </div>
  );
}

Dashboard.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Dashboard;
