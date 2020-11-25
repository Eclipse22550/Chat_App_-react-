import React, { useState } from "react";

import './Settings.css';

import TopBar from "./TopBar/TopBar";
import ContentSett from "./ContentSett/ContentSett";

const Settings = () => {

  return (
    <div id="out">
      <div id="Settings">
        <div id="topbar">
          <TopBar />
        </div>
        <div id="menu">
          <ContentSett />
        </div>
      </div>
    </div>
  );
}

export default Settings;