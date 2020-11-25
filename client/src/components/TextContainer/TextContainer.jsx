import React from 'react';

import settingsIcon from '../../icons/settingsIcon.png';
import profileIcon from '../../icons/profileIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({users}) => (
  <div className="textContainer">
    <div className="lineup">
      <div className="leftContainer">
        <img className="optionIcon" src={settingsIcon} alt="option icon" />
      </div>
      <div className="rightContainer">
        <img className="optIcon" src={profileIcon} alt="option icon" />
      </div>
    </div>
    <div className="content">
    {
        users
          ? (
            <div>
              <h1>Persone della camera:</h1>
              <div className="lineupp"></div>
              <div className="activeContainer">
                <h2>
                  {users.map(({name}) => (
                    <div key={name} className="activeItem">
                      {name}
                      <img alt="Online Icon" src={onlineIcon} />
                      <div className="chatbuttuni">
                        <button className="chatbutt" type="button"><h2>Chattta</h2></button>
                      </div>
                    </div>
                  ))}
                </h2>
              </div>                              
            </div>
          )
        : null
      }
    </div>
  </div>
);

export default TextContainer;