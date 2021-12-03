const LoginReducer = (state={}, action)=>{
    switch(action.type) {
        case "LOGIN_SUCCESS":
            return  Object.assign({}, state, action.payload)
        default :
            return Object.assign({}, state, {payload:{}})
    }
}

export default LoginReducer;