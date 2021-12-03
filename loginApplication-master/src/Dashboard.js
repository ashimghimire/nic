import React from 'react';
import Header from './components/header';
import {withContext} from './AuthContext';
import Sidenav from './components/Sidenav';
import {connect} from 'react-redux';
import {fetchItems, addItems,editItems, deleteItems, searchItems} from './actions/items';
import ContentDashboard from './components/ContentDashboard';

class Dashboard extends React.Component{


    render()    {
            
            const user={
                'email':this.props.user ? this.props.user:null
            };

            return(   
                <div>
                <div className="container-fluid">
                    <div className="row">                
                    <Sidenav {...this.props}/>
                    
                    <ContentDashboard {...this.props}/>


                    </div>
                </div>                  
                </div>);
        }
}

export default withContext(connect(null, null)(Dashboard));