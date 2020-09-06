import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/organisms/NavBar/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
