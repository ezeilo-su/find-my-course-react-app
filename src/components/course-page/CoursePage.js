import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchCourses from '../../actions/course';
import addFavorites from '../../actions/favorites/addFav';
import removeFavorite from '../../actions/favorites/removeFav';
import './CoursePage.css';

function CoursePage() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const favorites = useSelector((state) => state.favorites);
  const COURSE_URL = `http://localhost:3001/api/v1/courses/${slug}`;

  const courses = useSelector((state) => state.courses);
  const course = courses.courseList[0];

  useEffect(() => {
    dispatch(fetchCourses(COURSE_URL, 'SHOW'));
  }, []);

  const handleAddToFavorites = () => {
    dispatch(addFavorites(course, auth));
  };
  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(course, auth));
  };

  const checkFav = (courseSlug) => favorites.map((fav) => fav.slug)
    .includes(courseSlug);

  if (!courses.courseList.length) {
    return <h2>Loading...</h2>;
  }

  if (courses.error) {
    return <h2 className="alert alert-success">Error fetching item</h2>;
  }

  return (
    <div
      className="course-page card col-md-6 col-lg-6"
    >
      <img className="card-img-top" src={course.image_url} alt={course.slug} />
      <div className="card-body">
        <h5 className="card-title course-title">{course.title}</h5>
        <p className="card-text course-description">{course.description}</p>
        <p className="card-text course-duration">{course.duration}</p>
      </div>
      {
        !checkFav(course.slug) ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddToFavorites}
          >
            Add to favorites
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleRemoveFavorite}
          >
            Remove Favorites
          </button>
        )
      }
    </div>
  );
}

export default CoursePage;
