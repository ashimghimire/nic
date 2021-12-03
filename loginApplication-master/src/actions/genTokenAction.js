import axios from 'axios';

export const TOKEN_SUCCESS="TOKEN SUCCESS";
export const SERVER_URL="http://127.0.0.1:3003/";

export const genTokenAction = (payload) => {
    return function(dispatch){
       return axios.post(SERVER_URL+"generate-token", {...payload}).then((response)=>{
            if(response.status===200) {
                dispatch(genTokenSuccess(response.data));
              
            }           
        })
        
    }
}

export const genTokenSuccess = (data)=>{
    return {
        type:TOKEN_SUCCESS,
        payload:data
    }
}