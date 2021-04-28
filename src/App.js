/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
// import CoursePage from './components/course-page/CoursePage';
// import Footer from './components/footer/Footer';
// import Error from './components/error/Error';
import './index.css';
import './App.css';

export default function App() {
  const [state] = useState({
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {},
  });

  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navbar /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} loggedInStatus={state.loggedInStatus} />
            )}
          />
          {/* <Route path="/:name" component={CoursePage} /> */}
          <Route component={Error} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}
