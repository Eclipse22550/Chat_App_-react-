import React from 'react';
import { Link } from "react-router-dom";

import './OptionTop.css';

import settingsIcon from '../../../icons/settingsIcon.png';
import profileIcon from '../../../icons/profileIcon.png';

function OptionTop() {
    return(
        <div id="OptionTop">
            <div id="icon-menu">
                <div className="hamburger">
                    <Link to={"/new room"}>
                        <button type="submit" className="btn-menu-opt" name="btn-menu-opt"><i class="fas fa-external-link-alt"></i></button>
                    </Link>
                </div>
            </div>
            <div id="optioning-menu">
                <div id="username">
                    <Link to={"/Settings"}>
                        <button type="submit" className="settings"><img className="sett" src={settingsIcon} alt="settings_icon" /></button>
                    </Link>
                    <Link to={"/Profile"}>
                        <button type="submit" className="profile"><img className="pr" src={profileIcon} alt="profile_icon" /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OptionTop;