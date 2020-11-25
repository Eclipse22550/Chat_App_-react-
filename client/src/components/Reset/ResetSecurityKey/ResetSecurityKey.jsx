import React, { useState, useEffect, confirm } from "react";
import { Link } from "react-router-dom";
import queryString from 'query-string';
import io from "socket.io-client";

import Bar from './Bar/Bar';

import './ResetSecurityKey.css';

import Lefting from './Lefting/Lefting';
import Richting from './Richting/Richting';
import BottingRichting from "./BottingRighting/BottingRichting";

let socket;

const ResetSecurityKey = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
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
    <div id="ResetSecurityKey_outer">
      <div id="ResetSecurityKey_inner">
        <div id="Top">
          <Bar />
        </div>
        <div id="lefting">
          <Lefting users={users} messages={messages} message={message} name={name} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
        <div id="righting">
          <Richting />
        </div>
        <div id="botting_lefting">
            
        </div>
        <div id="botting_righting">
            <BottingRichting />
        </div>
      </div>
    </div>
  );
}

export default ResetSecurityKey;