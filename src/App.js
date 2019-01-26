import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import './App.css';

class Home extends Component {
  render() {
    return (
      <div>Home</div>
    )
  }
}

class Contact extends Component {
  render() {
    return (
      <div>Contact</div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
