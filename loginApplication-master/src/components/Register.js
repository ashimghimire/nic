import React from 'react';
import { withFormik } from 'formik';
import {withContext} from '../AuthContext';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';
import {register} from '../actions/login';
import Message from './Message';
import * as Yup from 'yup';


export class Register extends React.Component {
    
  componentDidMount(){
    
  }

  render(){
        const {values,touched,errors,handleChange,handleBlur,handleSubmit,response} = this.props;
        return (
          <div className="App">
            <div className="container">
              <div className="row mt-5">
            <div className="col-sm-4">    
              </div>
          <div className="col-sm-4 mt-5">    
            <div className="col-sm-12">
              {response.response?<Message {...this.props} message={response.response.data.message.message}/>:''}
            </div>
            <div className="panel mt-5">

              <h3>Register</h3>
              <form onSubmit={handleSubmit}>
              <div className="form-group mt-2">
                      <label>Username</label>
                      <input className="form-control" onChange={handleChange} value={values.username} name="username" type="text" placeholder="username"/>
                      {errors.username && touched.username && <div className="feedback">{errors.username}</div>}
                    </div>
                    <div className="form-group mt-2">
                    <label>Name</label>
                      <input className="form-control" onChange={handleChange} value={values.name} name="name" type="text" placeholder="name"/>
                    </div>
                    <div className="form-group mt-2">
                    <label>Password</label>
                      <input className="form-control" onChange={handleChange} value={values.password} name="password" type="password" placeholder="password"/>
                      {errors.password && touched.password && <div className="feedback">{errors.password}</div>}

                    </div>
                    <div className="form-group mt-2">
                    <label>Confirm Password</label>
                      <input className="form-control" onChange={handleChange} value={values.confirmPassword} name="confirmPassword" type="password" placeholder="Retype Password"/>
                      {errors.confirmPassword && touched.confirmPassword && <div className="feedback">{errors.confirmPassword}</div>}
                    </div>
                    <div className="form-group mt-2">
                    <label>Cuisine Preferences</label>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <select onChange={handleChange} value={values.cuisinePreference} name="cuisinePreference" class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Italian">Italian</option>
                        <option value="Baked">Baked</option>
                        </select>
                        </div>
                    </div>
                    <div className="form-group mt-2">
                    <label>Email</label>
                      <input className="form-control" onChange={handleChange} value={values.email} name="email" type="text" placeholder="email"/>
                      {errors.email && touched.email && <div className="feedback">{errors.email}</div>}
                    </div>
                    <div className="form-group mt-2">
                      <input className="btn btn-primary" type="Submit" value="Register"/> 
                    </div>
                </form>
                </div>
          </div>
            <div className="col-sm-4">    
            </div>
            </div>
            </div>
            
          </div>
        )}
}

const mapDispatchToProps=(dispatch)=>{
  return {
    navigateToLogin:()=>dispatch(push({pathname: '/login', state: {stepIndex: 1, increment: true}})),
    register:(values)=>dispatch(register(values))
  }
}

const mapStateToProps=(state)=>{
  console.log(state);
  return {
    response:state.register
  }
}

const validationSchema=Yup.object().shape({
  username:Yup.string().required("Field is required"),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  email:Yup.string().email("Email must me valid"),
});


export default connect(mapStateToProps,mapDispatchToProps)(withContext(withFormik({
    mapPropsToValues:(values)=>({
      username:'',
      name:'',
      password:'',
      cuisinePreference:'',
      email:''
    }),
    validationSchema:validationSchema,
    handleSubmit:(values, {resetForm,props})=>{
       props.register(values);
       resetForm();

    }
  })(Register)));