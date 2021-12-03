import React from 'react';
export default Headers = (props) => {
        return (
                <div>
                <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Resturant Menu Bar</a>
                <form className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0 mr-2" onClick={()=>props.navigateToLogin()} type="submit">Login</button>
                <button className="btn btn-outline-success my-2 my-sm-0 mr-2" onClick={()=>props.navigateToRegister()} type="submit">Register</button>
                </form>
                </nav>
                </div>
            );
}