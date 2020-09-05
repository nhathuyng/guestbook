import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider as Theme } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Theme theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
