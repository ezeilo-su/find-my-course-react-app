import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import auth from '../../actions/auth';
import fetchCourse from '../../actions/course';
import CourseItem from '../../components/course-item/CourseItem';
import { COURSES_INDEX_URL } from '../../constants/constants';
import './CourseIndex.css';

function CourseIndex() {
  const dispatch = useDispatch();
  const { message } = useLocation();

  const courses = useSelector((state) => state.courses);
  const addFav = useSelector((state) => state.addFav);

  useEffect(() => {
    dispatch(fetchCourse(COURSES_INDEX_URL, 'INDEX'));
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      dispatch(auth({
        status: true,
        token: user.token,
        username: user.username,
      }));
    } else {
      dispatch(auth());
    }
  }, []);

  if (courses.loading) {
    return <h2>Loading...</h2>;
  }

  if (courses.error) {
    return <h2 className="alert alert-warning">Error loading courses</h2>;
  }

  return (
    <div className="course-index container-fluid">
      { message && <p className="alert alert-warning">{ message }</p> }
      { addFav.error && <p className="alert alert-warning">Login required!</p> }
      <h2>ALL COURSES</h2>
      <div className="course-list row">
        {
          courses.courseList.map((thisCourse, idx) => (
            <CourseItem course={thisCourse} page="COURSE_INDEX" key={`course${idx + 1}`} />
          ))
        }
      </div>
    </div>
  );
}

export default CourseIndex;
