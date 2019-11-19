import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from 'Components/PrivateRoute';
import Header from 'Components/Header';
import Phase from 'Components/Phase';
import Login from 'Pages/Login';
import Search from 'Pages/Search';
import Results from 'Pages/Results';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Phase />
        <div id="main-wrapper">
          <Router>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" exact component={Search} />
            <PrivateRoute path="/search" component={Results} />
          </Router>
        </div>
      </>
    );
  }
}
