import React from 'react';
import PropTypes from 'prop-types';

function CourseIndex({ loggedInStatus }) {
  return (
    <div className="course-index">
      <h3>{ loggedInStatus }</h3>
      AllCourses here!
    </div>
  );
}

export default CourseIndex;

CourseIndex.propTypes = {
  loggedInStatus: PropTypes.string.isRequired,
};
