import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchCourses from '../../actions/course';
import './CoursePage.css';

function CoursePage() {
  const { slug } = useParams();
  const COURSE_URL = `http://localhost:3001/api/v1/courses/${slug}`;
  const dispatch = useDispatch();

  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses(COURSE_URL, 'SHOW'));
  }, []);

  if (courses.courseList.length) {
    return <h2>Loading...</h2>;
  }

  if (courses.error) {
    return <h2 className="alert alert-success">Error fetching item</h2>;
  }
  const course = courses.courseList[0];

  return (
    <div
      className="course-page card col-md-6 col-lg-6"
    >
      <img className="card-img-top" src={course.image_url} alt={course.slug} />
      <div className="card-body">
        <h5 className="card-title course-title">{course.title}</h5>
        <p className="card-text course-description">{course.description}</p>
        <p className="card-text course-duration">{course.duration}</p>
        <button type="button" className="btn btn-primary">Add to favorites</button>
      </div>
    </div>
  );
}

export default CoursePage;
