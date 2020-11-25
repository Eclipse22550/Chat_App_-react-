import React from 'react';
import { Link } from "react-router-dom";

import addIcon from '../../../icons/addIcon.png';
import deleteIcon from '../../../icons/deleteIcon.png';
import './Option.css';

function Option(){
    function refreshPage() {
        window.location.reload(false);
    }
    return(
        <div id="Option">
            <Link to={"/Invita"}>
                <button type="submit" className="add-user"><img className="add" src={addIcon} alt="add_icon" /></button>
            </Link>
            <Link onClick={refreshPage}>
                <button type="submit" className="delete"><img src={deleteIcon} className="del" alt="delete_icon" /></button>
            </Link>
        </div>
    );
};

export default Option;