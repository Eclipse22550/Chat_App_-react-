import React, { useState } from "react";

import './Profile.css';

import Bartop from './Bartop/Bartop';
import ContentProfile from './ContentProfile/ContentProfile';

const Profile = () => {
    const [users, setUsers] = useState('');
    const [name, setName] = useState('');

    return (
        <div id="outing">
            <div id="Profile">
              <div id="bartop">
                  <Bartop />
              </div>
              <div id="moodle">
                  <ContentProfile />
              </div>
            </div>
        </div>
    );
}

export default Profile;