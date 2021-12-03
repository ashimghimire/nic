import React from 'react';
import './App.css';
import Login from './containers/Login';
import {Route, BrowserRouter, Router, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import Register from './components/Register';
import Home from './components/Home';
import '../src/App.css';

class App extends React.Component {
  
  render() {
    
        return <div>
          { 
          process.env.NODE_ENV === 'development' ? 
          process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE
          }
                  <Switch>                  
                    <Route  path="/login" exact component={Login} />
                    <Route  path="/register" exact component={Register} />
                    <Route  path="/dashboard" component={Dashboard}/>
                    
                  </Switch>
              </div>
  }
}


export default App;
