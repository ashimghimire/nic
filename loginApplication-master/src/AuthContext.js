import React, { Component, createContext } from 'react';
import axios from 'axios';
import ls from 'local-storage';
import {isAuthenticated} from './jwtUtil';
import Italian from './components/Italian';

const AuthContext = createContext({
  user: {},
  isAuthenticated: false,
});

const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {

  state = {
    user: ls.get('email') || {},
    isAuthenticated: isAuthenticated() || false,
  };

  login = ({ appId, type,ip }) => {
    return axios.post(`http://127.0.0.1:3003/generate-token`, { appId, type, ip }).then((response) => {
        ls.set("token", response.data.token);
        ls.set("email", response.data.email);
        ls.set("cuisine", response.data.cuisine);
        this.setState({isAuthenticated:isAuthenticated()})
      return response;
    });
  };
   
  gotoDashboard = (history) => {
      const cuisine = ls.get("cuisine");
      let path='/dashboard';
      switch(cuisine){
        case 'Italian':
          path='/dashboard/italian';
          break;
        case 'Chinese':
          path='/dashboard/chinese';
          break;
        case 'Baked':
          path='/dashboard/baked';
        break;
        default:
          break;          
      }   
      history.push({pathname:path});
  }
  
  logout = (history) => {
    this.setState({ user: {}, isAuthenticated: false });
    ls.remove("token");
    ls.remove("email");
    ls.remove("cuisine");
    history.push({pathname:'/'})


  };

  render() {
    return (
      <AuthContext.Provider
        {...this.props}
        value={{
          ...this.state,
          login: this.login,
          logout: this.logout,
          gotoDashboard:this.gotoDashboard
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider, AuthConsumer };

export const withContext = Component => {
  return props => {
    return (
      <AuthContext.Consumer>
        {
          globalState => {
            return (
              <Component
                {...globalState}
                {...props}
              />
            );
          }
        }
      </AuthContext.Consumer>
    );
  };
};
