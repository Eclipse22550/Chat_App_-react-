import React, { Component, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './PopupVocal.css';

class PopupVocal extends Component {
  render() {
    return (
      <div id='Popup'>
        <div id="Popup_inner">
          <div id="Top-popup">
            <div id="Left-top-popup">
              <Link>
                <button type="submit" className="btn-left-top-popup-vocal" name="btn-left-top-popup-vocal" id="btn-left-top-popup-vocal"><i class="fas fa-microphone"></i></button>
              </Link>
            </div>
            <div id="Right-top-popup">
              <Link>
                <button type="submit" className="btn-right-top-popup-vocal" name="btn-right-top-popup-vocal" id="btn-right-top-popup-vocal"><i class="fas fa-stop"></i></button>
              </Link>
            </div>
          </div>
          <div id="Middle-popup">
            <div id="Left-middle-popup">
              <Link>
                <button type="submit" className="btn-left-middle-popup-popup-vocal" name="btn-left-middle-popup-popup-vocal" id="btn-left-middle-popup-popup-vocal"><i class="fas fa-trash"></i></button>
              </Link>
            </div>
            <div id="Right-middle-popup">

            </div>
          </div>
          <div id="Bottom-popup">
            <div id="Left-bottom-popup">
              <Link>
                <button type="submit" className="btn-left-bottom-popup-vocal" name="btn-left-bottom-popup-vocal" id="btn-left-bottom-popup-vocal"><i class="fas fa-download"></i></button>
              </Link>
            </div>
            <div id="Right-bottom-popup">
              <Link>
                <button type="submit" className="btn-send-vocal" name="btn-send-vocal" id="btn-send-vocal"><i class="fas fa-paper-plane"></i></button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupVocal;