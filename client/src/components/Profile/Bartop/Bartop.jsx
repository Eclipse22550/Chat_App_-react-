import React from 'react';
import { Link } from "react-router-dom";

import logout from '../../../icons/logout.png';
import './Bartop.css';

const Prof = () => (
    <div className="Bartop">
        <div className="leftContainer_leftContainer_leftContainer">
          <circle className="circle1_1_1"/>
          <circle className="circle2_2_2"/>
          <circle className="circle3_3_3"/>
        </div>
        <div id="center_center_center">
          <h1>Profile</h1>
        </div>
        <div className="rightContainer_rightContainer_rightContainer">
          <div id="logout_logout_logout">
            <Link to={"/chat"}>
              <button className="log_log_log" type="submit"><img src={logout} className="out_out_out" alt="logout_icon" /></button>
            </Link>
          </div>
        </div>
    </div>
);

export default Prof;