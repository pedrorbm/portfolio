import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Portfolio } />
      </Switch>
    )
  };
}

export default App;
