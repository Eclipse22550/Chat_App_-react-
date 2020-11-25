import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './PopupResetEmail.css';

class Popup extends Component {
  render() {
    return (
      <div id='Popup'>
        <div id="Inner-popup-res">
          <div id="top-popup-res">
            <h1367>
              <span className="span1">.</span>
              <span className="span2">.</span>
              <span className="span3">.</span>
            </h1367>
          </div>
          <div id="middle-popup-res">
            <div id="middle-left-popup-res">
              <Link>
                <button type="submit" className="btn-left-middle-popup-res" name="btn-left-top-popup-vocal" id="btn-left-top-popup-vocal"><i class="fas fa-clock"></i><p></p>Arrivato</button>
              </Link>
            </div>
            <div id="middle-right-popup-res">
              <Link>
                <button type="submit" className="btn-right-top-popup-vocal" name="btn-right-top-popup-vocal" id="btn-right-top-popup-vocal"><i class="fas fa-mail-bulk"></i><p></p>Riinvia</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;