import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Home from './components/Home';
import Game from './components/Game';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Rules from './components/Rules';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/Game">
          Game
        </NavLink>
        <NavLink activeClassName="active" to="/Contact">
          Contact
        </NavLink>
        <NavLink activeClassName="active" to="/Legal">
          Legal
        </NavLink>
        <NavLink activeClassName="active" to="/Rules">
          Rules
        </NavLink>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Game" component={Game} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Legal" component={Legal} />
          <Route exact path="/Rules" component={Rules} />
        </Switch>
      </div>
    );
  }
}

export default App;
