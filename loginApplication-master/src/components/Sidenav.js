import React from 'react';
import {Link} from 'react-router-dom';

const Sidenav = (props)=>{

  return (
    <div className="col-sm-0 col-md-3 col-xl-2 col-xs-0 sideNav">
      <ul className="list-group">
        <Link to="/dashboard/chinese">
          <li className={"list-group-item "}>Multi Check Inquiry</li>
          </Link>
          <Link to="/dashboard/italian">
          <li className={"list-group-item "}>Check Inquiry</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "}>Cheque Stop</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "}>Card Block</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "}>Card Block Live</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "}>Phone Email Update</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "}>Signature</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "}>Signature Add</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "}>Account Inquiry</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "}>CIF Creation</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "}>CIF Creation Individual Test</li>
          </Link>
          <Link to="/dashboard/baked">
          <li className={"list-group-item "}>CIF Creation Individual DB</li>
          </Link>
      </ul>
    </div>
  )
}

export default Sidenav;