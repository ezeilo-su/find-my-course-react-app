import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
// import CoursePage from './components/course-page/CoursePage';
// import Footer from './components/footer/Footer';
// import Error from './components/error/Error';
import loggedInUser from './actions/loggedInUser';
import './index.css';
import './App.css';
import CourseIndex from './containers/course-index/CourseIndex';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loggedInUser(localStorage.getItem('token')));
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={CourseIndex} />
          {/* <Route path="/:slug" component={CoursePage} /> */}
          <Route component={Error} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}