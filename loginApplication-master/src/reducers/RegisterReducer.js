import {REGISTER_SUCCESS} from '../actions/login';

const RegisterReducer = (state=[], action)=>{
    switch(action.type) {    
        case REGISTER_SUCCESS:
            return  Object.assign({}, state, {response:action.payload})
        default :
            return Object.assign({}, state, {payload:{}})
    }
}

export default RegisterReducer;