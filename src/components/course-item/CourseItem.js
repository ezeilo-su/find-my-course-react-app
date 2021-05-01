import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CourseItem({ course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="card course-item col-md-6 col-lg-4 text-decoration-none"
      style={{ width: '18rem' }}
    >
      <img className="card-img-top" src={course.image_url} alt={course.slug} />
      <div className="card-body">
        <h5 className="card-title course-title">{course.title}</h5>
        <p className="card-text course-description">{course.description}</p>
        <p className="card-text course-duration">{course.duration}</p>
        <Link to="/" className="btn btn-primary">Add to favorites</Link>
      </div>
    </Link>
  );
}

export default CourseItem;

CourseItem.propTypes = {
  course: PropTypes.objectOf(PropTypes.string).isRequired,
};
