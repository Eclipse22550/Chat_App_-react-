import React from 'react';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftContainer">
        <circle className="circle1"/>
        <circle className="circle2"/>
        <circle className="circle3"/>
    </div>
    <div id="center">
      <h1>Chat - App</h1>
    </div>
    <div className="rightContainer-h">
      <div className="dg">
        <input type="text" className="bb" placeholder="Cerca un messaggio..." />
        <button className="fgfg" type="submit" name="research-button"><i class="fas fa-search"></i></button>
      </div>
    </div>
  </div>
);

export default InfoBar;