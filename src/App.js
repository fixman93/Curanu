import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './containers/Dashboard/'
import Contact from './containers/Contact/'

import './App.scss';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
