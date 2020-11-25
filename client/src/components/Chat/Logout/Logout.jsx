import React from 'react';
import { Link } from "react-router-dom";

import './Logout.css';

import logout from '../../../icons/logout.png';

function Logout() {
    return(
        <div id="logout">
            <Link to={"/"}>
                <button id="btn-logout-out" className="btn-logout-out" type="submit"><img src={logout} className="out_out_outing" alt="logout_icon" /></button>
            </Link>
        </div>
    );
}

export default Logout;