import React from 'react';

function Message(props) {
    return (
        <div>
            
            <div className="col-sm-12">
                    <form className="form-inline">
                    <button className="btn btn-outline-success my-2 my-sm-0 mr-2" onClick={()=>props.navigateToLogin()} type="submit">Login</button>
                    </form>
            </div>
            <div className="col-sm-12 mt-1">
            <div class="alert alert-info" role="alert">
                   {props.message}
            </div>
            </div>
        </div>
    );
}

export default Message;