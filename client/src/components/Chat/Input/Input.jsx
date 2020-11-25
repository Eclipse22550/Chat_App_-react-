import React from 'react';

import emojiIcon from '../../../icons/emojiIcon.png';
import vocalIcon from '../../../icons/vocalIcon.png';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => {
  return(
    <form className="form">
      <button type="submit" className="emojiButton"><img className="emoji" src={emojiIcon} alt="emoji_icon" /></button>
      <input
        className="input"
        type="text"
        placeholder="Scrivi un messaggio..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button type="submit" className="vocalButton"><img className="vocal" src={vocalIcon} alt="vocal_btn" /></button>
      <button type="submit" onClick={e => sendMessage(e)} className="sendButton">Invia</button>
    </form>
  );
}

export default Input;