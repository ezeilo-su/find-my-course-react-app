export function formatErrorMessages(error) {
  return Object.keys(error)
    .reduce((keyAcc, key) => {
      const errs = error[key].reduce((errAcc, item) => {
        errAcc.push(`${key} ${item}`);
        return errAcc;
      }, []);
      return [...keyAcc, ...errs];
    }, []);
}

export function getRequestOptions(authToken) {
  return {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
}

export function addFavToLocalStorage(courseSlug) {
  let favorites;
  const existingFavs = localStorage.getItem('favCourses');
  if (existingFavs.length > 0) {
    favorites = [...existingFavs, courseSlug];
  } else {
    favorites = [courseSlug];
  }
  localStorage.setItem('favCourses', favorites);
}
