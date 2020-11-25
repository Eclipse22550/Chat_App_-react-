import React, { Component } from 'react';
import { Link } from "react-router-dom";
import toastify, { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Personalize.css';

import Upload from './Upload/Upload';

const CustomNullToast = () => {
    return (
        <div id="CustomNullToast">
            <span>Sei sicuro di voler procedere?</span>
            <br></br>
            <button href={"/chat?"} type="button" className="btn-custom-null-toast" name="btn-custom-null-toast">Conferma</button>
        </div>
    );
}

toast.configure();

class Personalize extends Component {
    render() {
        const nullend = () => {
            toast.error(<CustomNullToast />, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: false,
                delay: 200
            })
        }

        return (
            <div id="Personalize-outer">
                <div id="Personalite-inner">
                    <div id="top-personalize">
                        <Upload />
                    </div>
                    <div id="left-bottom-personalize">
                    <label className="checkbox-h">
                        <input type="checkbox" />
                        <span>Privata</span>
                    </label>
                    <label className="checkbox-h">
                      <input type="checkbox" />
                      <span>Pubblica</span>
                    </label>
                    </div>
                    <div id="right-bottom-personalize">
                        <Link to={"/chat?"}>
                            <button type="submit" className="btn-null" name="btn-null" id="btn-null">Annulla</button>
                        </Link>
                        <Link to={"/SetName"}>
                            <button type="submit" className="btn-ended" name="btn-ended" id="btn-ended">Procedi</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Personalize;