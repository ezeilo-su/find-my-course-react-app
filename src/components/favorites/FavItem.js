import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import removeFavorite from '../../actions/favorites/removeFav';

function CourseItem({ course }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // const favorites = useSelector((state) => state.favorites);

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(course, auth));
  };

  return (
    <div
      className="card course-item col-md-6 col-lg-4 text-decoration-none"
      style={{ width: '18rem' }}
    >
      <Link to={`/courses/${course.slug}`}>
        <img className="card-img-top" src={course.image_url} alt={course.slug} />
        <div className="card-body">
          <h5 className="card-title course-title">{course.title}</h5>
          <p className="card-text course-description">{course.description}</p>
        </div>
      </Link>
      <p className="card-text ml-3 course-duration">{course.duration}</p>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleRemoveFavorite}
      >
        Remove Favorite
      </button>
    </div>
  );
}

export default CourseItem;

CourseItem.propTypes = {
  course: PropTypes.objectOf(PropTypes.string).isRequired,
};
