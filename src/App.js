import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './style/App.css';
import NavBar from './components/navbar/navbar';
import Clients from './components/clients/clients';
import Actions from './components/actions/actions';
import Analytics from './components/analytics/analytics';
import Home from './components/home/home';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact render={() => <Home />} />
          <Route path="/clients" exact render={() => <Clients />} />
          <Route path="/actions" exact render={() => <Actions />} />
          <Route path="/analytics" exact render={() => <Analytics />} />

        </div>
      </Router >

    );
  }
}

export default App;
