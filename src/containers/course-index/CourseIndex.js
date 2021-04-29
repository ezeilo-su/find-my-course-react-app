import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCourses from '../../actions/course';
// import PropTypes from 'prop-types';

const COURSES_URL = 'http://localhost:3001/api/v1/courses';

function CourseIndex() {
  const dispatch = useDispatch();
  const allCourses = useSelector((state) => state.courses.courseList);
  console.log('CourseIndex', allCourses);

  useEffect(() => {
    dispatch(fetchCourses(COURSES_URL));
  }, []);

  return (
    <div className="course-index">
      <h3>AllCourses here!</h3>
    </div>
  );
}

export default CourseIndex;

// CourseIndex.propTypes = {
//   loggedInStatus: PropTypes.string.isRequired,
// };
