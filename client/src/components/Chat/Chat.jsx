import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import Mn from './MN/Mn';
import Messages from './Messages/Messages';
import Logout from './Logout/Logout';
import Option from './Option/Option';
import Input from './Input/Input';
import InfoBar from './InfoBar/InfoBar';
import OptionTop from './OptionTop/OptionTop';
import Namechat from './Namechat/Namechat';

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://project-chat-application.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message ]);
    });

    socket.on('room', ({ users }) => {
      setUsers(users);
    })
    
    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [messages])

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <div id="top">
          <InfoBar />
        </div>
        <div id="option-top">
          <OptionTop />
        </div>
        <div id="name-chat">
          <Namechat user={user} />
        </div>
        <div id="mn">
          <Mn />
        </div>
        <div id="box">
          <Messages messages={messages} name={name} />
        </div>
        <div id="logout">
          <Logout />
        </div>
        <div id="option">
          <Option users={users} />
        </div>
        <div id="input">
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
}

export default Chat;