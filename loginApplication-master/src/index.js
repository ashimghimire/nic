import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider,ReactReduxContext } from 'react-redux';
import Store from './configureStore';
import {AuthProvider} from './AuthContext';
import { verifyToken } from './VerifyToken';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './configureStore';
import {Route, BrowserRouter, Router, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store}>
          <ConnectedRouter history={history} noInitialPop>
            <Router history={history}>
            <AuthProvider>
            <App  />
            </AuthProvider>
            </Router>
            </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
