import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from '../Routes/Home';
import Header from './Header';
import LogIn from 'Routes/LogIn';
import SignIn from 'Routes/SignIn';
import Survey from 'Routes/Survey';
import Report from 'Routes/Report';

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={LogIn} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/survey' exact component={Survey} />
        <Route path='/report' exact component={Report} />
      </Switch>
    </Router>
  );
};
