import React from 'react';
import Registration from '../auth/registration/Registration';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Registration />
    </div>
  );
}

export default Home;

// CourseIndex.propTypes = {
//   loggedInStatus: PropTypes.string.isRequired,
// };
