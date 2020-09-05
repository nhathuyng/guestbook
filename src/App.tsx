import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import NavBar from './components/organisms/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Link to="/">Home Page</Link>
        <span> | </span>
        <Link to="/about">About Page</Link>
      </div>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/about" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
