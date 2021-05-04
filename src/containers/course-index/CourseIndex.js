import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchCourse from '../../actions/course';
import CourseItem from '../../components/course-item/CourseItem';
import { COURSES_INDEX_URL } from '../../constants/constants';
import './CourseIndex.css';

function CourseIndex() {
  const dispatch = useDispatch();
  const { message } = useLocation();

  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourse(COURSES_INDEX_URL, 'INDEX'));
  }, []);

  if (courses.loading) {
    return <h2>Loading...</h2>;
  }

  if (courses.error) {
    return <h2>Error loading courses</h2>;
  }

  return (
    <div className="course-index container-fluid">
      { message && <p className="alert alert-warning">{ message }</p> }
      <h2>ALL COURSES</h2>
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
