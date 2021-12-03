import {REGISTER_SUCCESS} from '../actions/login';
import { TOKEN_SUCCESS } from '../actions/genTokenAction';

const GenerateTokenReducer = (state=[], action)=>{
    switch(action.type) {    
        case TOKEN_SUCCESS:
            return  Object.assign({}, state, {response:action.payload})
        default :
            return Object.assign({}, state, {payload:{}})
    }
}

export default GenerateTokenReducer;