import React, { Component } from 'react';
import { Link } from "react-router-dom";

import roomIcon from '../../icons/roomIcon.png';
import passwordIcon from '../../icons/passwordIcon.png';
import userIcon from '../../icons/userIcon.png';

import './Invita.css';

export default class Invita extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: ""
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.ShowPass = this.ShowPass.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  ShowPass() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
        this.setState({ password: this.props.password });
    }
  }

  render() {
    return (
      <div id="tabs_tabs">
        <form className="box_box" id="box_box" method="POST" action="invita.php">
        <h3>Nuova chat</h3>
          <div className="input_input">
            <input className="username_username" type="text" placeholder="Username" name="username_username" />
            <img src={userIcon} alt="User_icon" />
          </div>
          <div className="input_input">
            <input className="room_room" type="text" placeholder="Room" name="room_room" />
            <img src={roomIcon} alt="Room_icon" />
          </div>
          <div className="input_input">
            <input className="password_password" type={this.state.hidden ? "password" : "text"} placeholder="Password" name="password_password" />
            <img src={passwordIcon} alt="Password_icon" />
          </div>
          <label className="checkbox">
            <input type="checkbox" onClick={this.ShowPass} />
            <span>Mostra password</span>
          </label>
          <Link>
            <input type="submit" className="invita" name="invita" />
          </Link>
          <Link to={"/chat"}>
            <a><h30>Indietro</h30></a>
          </Link>
        </form>  
      </div>
    );
  }
};