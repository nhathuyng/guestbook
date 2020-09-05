import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/organisms/NavBar/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
