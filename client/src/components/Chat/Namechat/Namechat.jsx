import React, { Component } from 'react';

import './Namechat.css';

import userIcon from '../../../icons/userIcon.png';

class Namechat extends Component {
    render(user) {
        return(
            <div id="Namechat">
                <div id="Namechat-left">
                    <div id="image-profile">
                        <img className="prof-us" src={userIcon} />
                    </div>
                    <div id="name-user">
                        <h230>Eclipse22550</h230>
                        <p></p>
                        <h231>Ultimo accesso alle 00:00</h231>
                    </div>
                </div>
                <div id="Namechat-right">
                    
                </div>
            </div>
        );
    }
};

export default Namechat;