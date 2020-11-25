import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import './SetName.css';

import roomIcon from '../../../icons/roomIcon.png';
import userIcon from '../../../icons/userIcon.png';

class SetName extends Component {
    state = {
        name_of_room : "",
        bio : "",
        admin_of_room : ""
    }

    handleName_Of_Room = async e => {
        await this.setState({
            name_of_room : e.target.value
        })
    }

    handleBio = async e => {
        await this.setState({
            bio : e.target.value
        })
    }

    handleAdmin_Of_Room = async e => {
        await this.setState({
            admin_of_room : e.target.value
        })
    }

    handleSetNameSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        let formData = new FormData();
        formData.append("bio", this.state);
        const url = "http://localhost/server/NewRoom/SetName/Bio.php";
        axios.post(url, formData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="SetName-outer">
                <div id="SetName-inner">
                    <div id="SetName-top">
                        <div id="SetName-top-left">
                            <div className="input_inputf_input">
                                <input class="name_room" placeholder="Nome della camera" name="room_name"  value={this.state.name_of_room} onChange={this.handleName_Of_Room} />
                                <img src={roomIcon} alt="room_icon" />
                            </div>
                        </div>
                        <div id="SetName-top-right">
                            <div className="input_inputfg_input">
                                <input class="user_admin" placeholder="Amministratore" name="Administrator_of_room" value={this.state.admin_of_room} onChange={this.handleAdmin_Of_Room} />
                                <img src={userIcon} alt="user_icon" />
                            </div>
                        </div>
                    </div>
                    <div id="SetName-middle">
                        <div className="input_inputf_input">
                            <textarea className="description_room" placeholder="Descrizione della camera..." name="description_room" value={this.state.bio} onChange={this.handleBio} />
                        </div>
                    </div>
                    <div id="SetName-bottom">
                        <div id="left-bottom-setName">
                            <label className="checkbox_setname">
                                <input type="checkbox" />
                                <span>Incorpora utenti</span>
                            </label>
                        </div>
                        <div id="right-bottom-setName">
                            <Link>
                                <button className="btn-return" type="submit" id="btn-return">Annulla</button>
                            </Link>
                            <Link onClick={this.handleSetNameSubmit}>
                                <button className="btn-procede" type="submit" id="btn-procede">Procedi</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SetName;