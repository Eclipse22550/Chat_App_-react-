import React from 'react';
import { Link } from "react-router-dom";

import './Lefting.css';

import Insek from '../Insek/Insek';

import endIcon from '../../../../icons/endIcon.png';
import deleteIcon from '../../../../icons/deleteIcon.png';

function Lefting({ message, sendMessage, setMessage }) {

    function refreshPage() {
        window.location.reload(false);
    }
    
    return(
        <div id="Lefting">
            <div id="optionning">
                <Link>
                    <button type="submit" className="ended"><img src={endIcon} className="end" alt="end_icon" /></button>
                </Link>
                <Link onClick={refreshPage}>
                    <button type="submit" className="refresh"><img src={deleteIcon} className="fresh" alt="refresh_icon" /></button>
                </Link>
            </div>
            <div id="chatte">
                <div id="toppe">

                </div>
                <div id="inserting">
                    <Insek message={message} setMessage={setMessage} sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    );
}

export default Lefting;