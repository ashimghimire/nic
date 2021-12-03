import React from 'react'
import PrivateRoute from '../PrivateRoute';
import {Route, BrowserRouter, Router, Switch} from 'react-router-dom';
import itemHome from './Itemhome';
import Chinese from './Chinese';
import Italian from './Italian';
import Baked from './Baked';
export default function Items(props) {
    console.log(props);
    return (
        <div>
        <Router history={props.history}>
             <Switch>                   
                    <Route  path="/chinese" exact  component={Chinese} />
                    <Route  path="/italian"  component={Italian}/>
                    <Route path="/baked"  component={Baked}/>
                    <Route  path="/"  component={itemHome} />
                  </Switch>  
        </Router>     
        </div>
    )
}
