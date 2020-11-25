import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SetName from './components/NewRoom/SetName/SetName';
import Personalize from './components/NewRoom/Personalize/Personalize';
import NewRoom from './components/NewRoom/NewRoom';
import Profileuser from './components/Profileuser/Profileuser';
import Reset from './components/Reset/Reset';
import Register from './components/Register/Register';
import ResetSecurityKey from './components/Reset/ResetSecurityKey/ResetSecurityKey';
import Information from './components/Reset/Information/Information';
import ResetPassword from './components/Reset/ResetPassword/ResetPassword';
import ResetUsername from './components/Reset/ResetUsername/ResetUsername';
import ResetEmail from './components/Reset/ResetEmail/ResetEmail';
import Invita from './components/Invita/Invita';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login}  />
      <Route path="/chat" component={Chat} />
      <Route path="/settings" component={Settings} />
      <Route path="/profile" component={Profile} />
      <Route path="/invita" component={Invita} />
      <Route path="/reset email" component={ResetEmail} />
      <Route path="/reset username" component={ResetUsername} />
      <Route path="/reset password" component={ResetPassword} />
      <Route path="/information" component={Information} />
      <Route path="/reset security key" component={ResetSecurityKey} />
      <Route path="/register" component={Register} />
      <Route path="/reset" component={Reset} />
      <Route path="/profile user" component={Profileuser} />
      <Route path="/new room" component={NewRoom} />
      <Route path="/Personalize" component={Personalize} />
      <Route path="/SetName" component={SetName} />
    </Router>
  );
}

export default App;