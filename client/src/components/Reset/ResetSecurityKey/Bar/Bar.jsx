import React from 'react';
import { Link } from "react-router-dom";

import './Bar.css';

import logout from '../../../../icons/logout.png';

const Bar = () => (
    <div className="bar">
        <div className="leftContainer_leftContainer_left">
          <circle className="circle1_1_1"/>
          <circle className="circle2_2_2"/>
          <circle className="circle3_3_3"/>
        </div>
        <div id="center_center_centrum">
          <h1>Recupera S.K.</h1>
        </div>
        <div className="rightContainer_rightContainer_right">
          <div id="logout_logout_logout">
            <Link to={"/reset"}>
              <button className="log_log_log" type="submit"><img src={logout} className="out_out_out" alt="logout_icon" /></button>
            </Link>
          </div>
        </div>
    </div>
);

export default Bar;