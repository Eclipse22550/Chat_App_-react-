import React from 'react';

import './BottingRichting.css';

import alertIcon from '../../../../icons/alertIcon.png';

const BottingRichting = () => {
    return(
        <div id="BottingRichting">
            <div id="default-message-left">
                <img className="alert-icon" src={alertIcon} alt="alert-icon" />
            </div>
            <div id="default-message-right">
                <h1110>ATTENZIONE:</h1110>
                <p></p>
                <h1109>Per poter usufruire dell'assistenza, devi prima compilare i campi sulla tua destra.</h1109>
                <p></p>
                <h1108>Successivamente verrai contattato da un'amministratore.</h1108>
            </div>
        </div>
    );
}

export default BottingRichting;