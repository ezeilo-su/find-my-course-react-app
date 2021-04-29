import React from 'react';
import PropTypes from 'prop-types';

function CourseItem({ course }) {
  return (
    <div className="course-item col-md-6 col-lg-4">
      <div className="img-wrap">
        <img src={course.image_url} alt={course.slug} />
      </div>
      <h4 className="course-title">{course.title}</h4>
      <p className="course-description">{course.description}</p>
      <p className="course-duration">{course.duration}</p>
    </div>
  );
}

export default CourseItem;

CourseItem.propTypes = {
  course: PropTypes.objectOf(PropTypes.string).isRequired,
};
