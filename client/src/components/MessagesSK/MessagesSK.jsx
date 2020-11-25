import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import MessageSK from './MessageSK/MessageSK';

import './MessageSK.css';

const MessagesSK = ({ messages, name }) => (
    <ScrollToBottom>
        {messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)}
    </ScrollToBottom>
);

export default MessagesSK;