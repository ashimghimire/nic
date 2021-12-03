import React from 'react';
import {withFormik } from 'formik';
import {withContext} from '../AuthContext';
import {push} from 'connected-react-router';
import {genTokenAction} from '../actions/genTokenAction';
import {connect} from 'react-redux';


export class Login extends React.Component {
    
  componentDidMount(){
    
  }

  render(){
        const {values,touched,errors,handleChange,handleBlur,handleSubmit} = this.props;
        return (
          <div className="App">
            <div className="container">
              <div className="row mt-5">
            <div className="col-sm-4">    
              </div>
          <div className="col-sm-4 mt-5">
           
            <div className="panel mt-5">
              <h3>Generate Token</h3>
              <form onSubmit={handleSubmit}>
                    {/* <div className="form-group mt-5">
                      <input className="form-control" onChange={handleChange} value={values.email} name="email" type="text" placeholder="username"/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" onChange={handleChange} type="password" value={values.password} name="password" placeholder="password"/>
                    </div> */}
                    <div className="form-group">
                      <input className="form-control" onChange={handleChange} type="text" value={values.ip} name="ip" placeholder="IP Address"/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" onChange={handleChange} type="text" value={values.appId} name="appId" placeholder="Application ID"/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" onChange={handleChange} type="text" value={values.type} name="type" placeholder="Type"/>
                    </div>
                    <div className="form-group">
                      <input className="btn btn-primary" type="Submit" value="Generate Token"/> 
                    </div>
                </form>
                </div>
               
          </div>
            <div className="col-sm-4">    
            </div>
            </div>
            <div className="row mt-5">
            <div class="col-sm-12" style={{width:'100%'}}>
                { this.props.token.response &&  
                <div className="col-sm-12">
                  <p> { 
                        this.props.token.response.token
                      }
                  </p>
                  </div>
                }
               </div>    
            </div>
            </div>
            
          </div>
        )}
}

const mapDispatchToProps=(dispatch)=>{

  return {
    navigateToDashboard:()=>dispatch(push({pathname: '/dashboard', state: {stepIndex: 1, increment: true}})),
    generateToken:(data)=>dispatch(genTokenAction(data))
  }
}

const mapStateToProps = (state)=>{
  return {
    token:state.token
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withContext(withFormik({
    mapPropsToValues:(values)=>({
      type:'',
      appId:'',
      ip:''
    }),
    handleSubmit:(values, {props})=>{
       //props.generateToken(values);
       props.navigateToDashboard();
    }
  })(Login)));