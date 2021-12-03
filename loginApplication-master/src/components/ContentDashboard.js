import React,  {useEffect, useState} from 'react';
import Items from '../components/items';
import PrivateRoute from '../PrivateRoute';
import {Route, BrowserRouter, Router, Switch} from 'react-router-dom';
import itemHome from './Itemhome';
import Chinese from './Chinese';
import Italian from './Italian';
import Baked from './Baked';
import axios from 'axios';
import {history} from '../configureStore';
import header from './header';
import ls from 'local-storage';



const ContentDashbaord = (props) => {
    const [cuisine, setCuisine] = useState({});

    useEffect(() => {
        const url="http://localhost:8081/users/cuisine";
        async function fetchData() {
          const response = await axios(url,{headers:{token:ls.get("token")}});
          if(response.status===200){
          setCuisine(response.data);
        }
        }

        fetchData();
      }, []);

    return (
        <div className="col-sm-0 col-md-9 col-xl-10">
        <div className="col-sm-12 mt-2">
        <button className="btn btn-outline-dark my-2 my-sm-0 mr-2 float-right" onClick={()=>props.logout(props.history)} type="submit">Logout</button>
        </div>
        <Router history={history}>
                  <Switch>                   
                    <PrivateRoute  path="/dashboard/chinese" component={Chinese} cuisine={cuisine.chinese}  />
                    <PrivateRoute  path="/dashboard/italian" component={Italian} cuisine={cuisine.italian}  />
                    <PrivateRoute  path="/dashboard/baked" component={Baked} cuisine={cuisine.baked}  />
                  </Switch>  
        </Router>     
        </div>
    )
}

export default ContentDashbaord;