import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchCourses from '../../actions/course';
import CourseItem from '../../components/course-item/courseItem';
// import PropTypes from 'prop-types';

const COURSES_URL = 'http://localhost:3001/api/v1/courses';

function CourseIndex() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses(COURSES_URL));
  }, []);

  const courses = useSelector((state) => state.courses);

  if (courses.loading) {
    return <h2>Loading...</h2>;
  }

  if (courses.error) {
    return <h2>Error loading courses</h2>;
  }

  return (
    <div className="courses container-fluid">
      <h2>AllCourses here!</h2>
      <div className="course-list row">
        {
          courses.courseList.map((thisCourse, idx) => (
            <CourseItem course={thisCourse} key={`course${idx + 1}`} />
          ))
        }
      </div>
    </div>
  );
}

export default CourseIndex;
// CourseIndex.propTypes = {
//   loggedInStatus: PropTypes.string.isRequired,
// };
