import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import fetchFavs from '../../actions/favorites/fetchFavs';
import FavItem from './FavItem';
import './FavIndex.css';

function FavoriteIndex() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const favorites = useSelector((state) => state.favorites);
  const fetchFavorites = useSelector((state) => state.fetchFavs);

  // if (!auth?.status) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: '/login',
  //       }}
  //     />
  //   );
  // }

  useEffect(() => {
    dispatch(fetchFavs(auth));
  }, []);

  if (fetchFavorites.loading) {
    return <h2>Loading favorites...</h2>;
  }

  if (fetchFavorites.error) {
    return (
      <p
        className="alert alert-warning"
      >
        Couldn&apos;t add to favorites. Ensure you are logged in.
      </p>
    );
  }

  return (
    <div className="fav-index container-fluid">
      <h2>ALL Favorites</h2>
      <div className="fav-list row center">
        {
          favorites.map((thisCourse, idx) => (
            <FavItem course={thisCourse} key={`course${idx + 1}`} />
          ))
        }
      </div>
    </div>
  );
}

export default FavoriteIndex;
