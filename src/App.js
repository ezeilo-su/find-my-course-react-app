import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './index.css';
import './App.css';
import loggedInUser from './actions/loggedInUser';
import Error from './components/error/Error';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Logout from './components/auth/Logout';
// import CoursePage from './components/course-page/CoursePage';
import CourseIndex from './containers/course-index/CourseIndex';
import Registration from './components/registration/Registration';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      user.loggedIn = true;
      dispatch(loggedInUser(user));
    } else {
      dispatch(loggedInUser(null));
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Footer />
        <Switch>
          <Route exact path="/" component={CourseIndex} />
          <Route path="/signup" component={Registration} />
          <Route path="/logout" component={Logout} />
          {/* <Route path="/courses/:slug" component={CoursePage} /> */}
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
