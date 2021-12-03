import axios from 'axios';
import ls from 'local-storage';

export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const REGISTER_SUCCESS="REGISTER_SUCCESS";

export const serverUrl="//10.10.154.71:3000";

export const login = (values) => {
    return function(dispatch){
       return axios.post(serverUrl + "/generate-token",{values}).then((response)=>{
            if(response.status===200){
                dispatch(loginSuccess(response));
               // ls.set("token", response.data.token);
               // ls.set("username",response.data.userName);
            }
            
        })
        
    }
}

export const register = (values) =>{ 
    
    return function(dispatch){
        return axios.post(serverUrl+"/users/register", {values}).then((response)=>{
             if(response.status===200){
                 dispatch(registerSuccess(response));
             }            
         })
         
     }
}

export function registerSuccess(response){
    return{
        type:REGISTER_SUCCESS,
        payload:response
    }
}

export function loginSuccess (response){
    return {
        type:LOGIN_SUCCESS,
        payload:response
    }

}