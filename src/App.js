import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import loggedInUser from './actions/loggedInUser';
import './index.css';
import './App.css';
// import Error from './components/error/Error';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// import CoursePage from './components/course-page/CoursePage';
import CourseIndex from './containers/course-index/CourseIndex';
import Registration from './components/registration/Registration';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loggedInUser(localStorage.getItem('auth_token')));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Footer />
        <Switch>
          <Route exact path="/" component={CourseIndex} />
          <Route path="/signup" component={Registration} />
          {/* <Route path="/courses/:slug" component={CoursePage} /> */}
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
