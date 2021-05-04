import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import addFavorites from '../../actions/favorites/addFav';

function CourseItem({ course }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const favorites = useSelector((state) => state.favorites);

  const handleAddToFavorites = () => {
    dispatch(addFavorites(course, auth.token));
  };

  const checkFav = (courseSlug) => favorites.map((fav) => fav.slug)
    .includes(courseSlug);

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

      {
        !checkFav(course.slug) ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddToFavorites}
          >
            Add to favorites
          </button>
        ) : <button type="button" className="btn btn-secondary" disabled>Favorite</button>
      }
    </div>
  );
}

export default CourseItem;

CourseItem.propTypes = {
  course: PropTypes.objectOf(PropTypes.string).isRequired,
};
