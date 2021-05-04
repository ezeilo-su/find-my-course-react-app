// import {
//   FETCH_FAV_REQUEST,
//   FETCH_FAV_SUCCESS,
//   FETCH_FAV_FAILURE,
// } from '../../actionTypes/index';
// import { formatErrorMessages, getRequestOptions } from '../../utils/utils';

// import { FETCH_FAV_URL } from '../../constants/constants';

// const axios = require('axios');

// export const addFavRequest = () => ({
//   type: FETCH_FAV_REQUEST,
// });

// export const addFavSuccess = (favorite) => ({
//   type: FETCH_FAV_SUCCESS,
//   payload: favoriteS,
// });

// export const addFavFailure = (error) => ({
//   type: FETCH_FAV_FAILURE,
//   payload: error,
// });

// const fetchFavorites = (authToken) => async (dispatch) => {
//   dispatch(fetchFavRequest);
//   try {
//     const { data: { data } } = await axios.post(FETCH_FAV_URL, {
//       favorite: {
//         course_slug: courseSlug,
//       },
//     }, getRequestOptions(authToken));

//     dispatch(fetchFavSuccess({
//       // data.attributes
//     }));
//   } catch ({ response: { data: { error } } }) {
//     if (error) {
//       dispatch(addFavFailure(formatErrorMessages(error)));
//     }
//   }
// };

// export default addFavorites;
