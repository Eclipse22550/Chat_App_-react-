import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './Frequently.css';

const Frequently = ({users}) => (
    <div className="Frequently">
        {
        users
          ? (
            <div>
              <h1>Persone della camera:</h1>
              <div className="lienup"></div>
              <div className="activeContainer">
                <h2>
                  {users.map(({name}) => (
                    <div key={name} className="activeItem">
                      {name}
                      <img className="online" alt="Online Icon" src={onlineIcon} />
                    </div>
                  ))}
                </h2>
              </div>                              
            </div>
          )
        : null
      }
    </div>
);

export default Frequently;