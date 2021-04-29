import React from 'react'
import PropTypes from 'prop-types';

function courseItem({ course }) {
  return (
    <div>
      <h3>{course.}</h3>
    </div>
  )
}

export default courseItem

CourseIndex.propTypes = {
  course: PropTypes.objectOf(PropTypes.string).isRequired,
};
