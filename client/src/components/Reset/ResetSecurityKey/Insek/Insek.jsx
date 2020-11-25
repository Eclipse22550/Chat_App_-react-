import React from 'react';

import './Insek.css';

const Insek = ({ setMessage, sendMessage, message }) => (
    <form className="insek-form">
        <input
        className="insek-input"
        type="text"
        placeholder="Scrivi un messaggio..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="insek-sendButton" onClick={e => sendMessage(e)}>Invia</button>
    </form>
);

export default Insek;