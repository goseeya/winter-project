
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncDuck = asyncComponent(() => {
  return import('./containers/Duck.js');
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link> |
          <Link to="/duck">Duck</Link>
        </div>
        <div>
        <Route path="/" exact component={Users} />
        <Route path="/duck" component={AsyncDuck} />
        </div>
      </div>
    )
  }
}
