import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchFavs from '../../actions/favorites/fetchFavs';
import CourseItem from '../course-item/CourseItem';
import './FavIndex.css';

function FavoriteIndex() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavs(auth.token));
  }, []);

  if (fetchFavs.loading) {
    return <h2>Loading favorites...</h2>;
  }

  if (fetchFavs.error) {
    return <h2 className="alert alert-warning">Error loading favorites</h2>;
  }

  return (
    <div className="course-index container-fluid">
      <h2>ALL Favorites</h2>
      <div className="course-list row">
        {
          favorites.map((thisCourse, idx) => (
            <CourseItem course={thisCourse} key={`course${idx + 1}`} />
          ))
        }
      </div>
    </div>
  );
}

export default FavoriteIndex;
