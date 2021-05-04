import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './index.css';
import './App.css';
import auth from './actions/auth';
import Error from './components/error/Error';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Logout from './components/auth/Logout';
import Login from './components/auth/Login';
import CoursePage from './components/course-page/CoursePage';
import CourseIndex from './containers/course-index/CourseIndex';
import Registration from './components/registration/Registration';
import FavIndex from './components/favorites/FavIndex';
import fetchFavs from './actions/favorites/fetchFavs';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
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
    dispatch(fetchFavs(user));
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
          <Route path="/login" component={Login} />
          <Route path="/courses/:slug" component={CoursePage} />
          <Route path="/favorites" component={FavIndex} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
