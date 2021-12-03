import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthConsumer } from './AuthContext';


const PrivateRoute = ({component: Component, layout: Layout, ...rest}) => (
  <div>
    <AuthConsumer>
    { ({isAuthenticated}) => <Route
        {...rest}
        render={props => {
          return (isAuthenticated ?
            <Component {...props} {...rest}/>
            :
            <Redirect to={{
              pathname: '/login',
              state: {from: props.location}
            }}/>)
        }}
      />}
    </AuthConsumer>
  </div>
);

export default PrivateRoute;
