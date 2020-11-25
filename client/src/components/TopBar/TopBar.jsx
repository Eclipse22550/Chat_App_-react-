import React from 'react';
import { Link } from "react-router-dom";

import logout from '../../../icons/logout.png';
import './TopBar.css';

const TopBar = ({ room, name}) => (
    <div className="topbar">
        <div className="leftContainer_leftContainer">
          <circle className="circle1_1"/>
          <circle className="circle2_2"/>
          <circle className="circle3_3"/>
        </div>
        <div id="center_center">
          <h1>Impostazioni</h1>
        </div>
        <div className="rightContainer_rightContainer">
          <div id="logout_logout">
            <Link to={`/chat?name=${name}&room=${room}`}>
              <button className="log_log" type="submit"><img src={logout} className="out_out" alt="logout_icon" /></button>
            </Link>
          </div>
        </div>
    </div>
);

export default TopBar;