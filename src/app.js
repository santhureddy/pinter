import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './home/home';
import Parent from './parent/parent';
import Dashboard from './dashboard/dashboard';
import Graph from './graph/graph';
import TreeGraph from './treeGraph/treeGraph';
import Inner from './inner/inner';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <h3><Link to={'/'} className="nav-link"> Intuit </Link></h3>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
			  <Route path='/parent' component={Parent} />
              <Route path='/dashboard' component={Dashboard} />
			  <Route path='/inner' component={Inner} />
			  <Route path='/graph' component={Graph} />
			  <Route path='/treeGraph' component={TreeGraph} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;