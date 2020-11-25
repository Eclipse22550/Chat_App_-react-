import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Toastify, { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './NewRoom.css';

import PopupPassword from './PopupPassword/PopupPassword';

import userIcon from '../../icons/userIcon.png';
import roomIcon from '../../icons/roomIcon.png';

toast.configure();

const TextNotifySuccess = () => {
  return(
    <div>
      <h7>Modulo corretto!</h7>
    </div>
  );
}

const TextNotifyWarn = () => {
  return(
    <div>
      <h7>Oops, errore!?</h7>
    </div>
  );
}

const TextNotifyError = () => {
  return(
    <div>
      <h7>Dati errati!!!</h7>
    </div>
  );
}

class NewRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopupPassword: false
    };

    this.state = {
      fields: {},
      errors: {}
    }

    this.handleCreateRoomChange = this.handleCreateRoomChange.bind(this);
    this.submitCreateRoomForm = this.submitCreateRoomForm.bind(this);
  };

  togglePopupPassword() {
    this.setState({
      showPopupPassword: !this.state.showPopupPassword
    });
  }

  handleCreateRoomChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submitCreateRoomForm(e) {
    e.preventDefault();
    if (this.validateCreateRoomForm()) {
      let fields = {};
      fields["username"] = "";
      fields["room"] = "";
      this.setState({fields:fields});
    }
  }

  validateCreateRoomForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Immetti il tuo username.";
    }
    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "Immetti solo caratterri dell'alfabeto!";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Immetti una password.";
    }
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "Immetti una password sicura!";
      }
    }

    if (!fields["room"]) {
      formIsValid = false;
      errors["room"] = "Immetti il nome della camera!";
    }
    if (typeof fields["room"] !== "undefined") {
      if (!fields["room"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["room"] = "Immetti solo caratterri dell'alfabeto!";
      }
    }

    this.setState({
      errors: errors
    });

    return formIsValid;
  }

  render() {
    const NotifySuccess = () => {
      toast.success(<TextNotifySuccess />, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 10000,
        delay: 50,
        pauseOnHover: true,
        closeOnClick: false,
        draggable: true
      })
    };

    const NotifyWarn = () => {
      toast.warn(<TextNotifyWarn />, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 10000,
        delay: 75,
        pauseOnHover: true,
        closeOnClick: false,
        draggable: true
      })
    };

    const NotifyError = () => {
      toast.error(<TextNotifyError />, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 10000,
        delay: 100,
        pauseOnHover: true,
        closeOnClick: false,
        draggable: true
      })
    };
    
    return (
      <div id="tabs_tabs">
          <form method="post" className="box_boxs" id="box_boxs" name="CreateRoomForm" onSubmit={this.submitCreateRoomForm} >
          <h3>Nuova camera</h3>
            <div className="input_inputss">
              <input className="username_username" type="text" placeholder="Username" name="username" value={this.state.fields.username} onChange={this.handleCreateRoomChange} />
              <img src={userIcon} alt="User_icon" />
              <div className="errorMsg">{this.state.errors.username}</div>
            </div>
            <div className="input_inputss">
              <input className="room_room" type="text" placeholder="Room" name="room" value={this.state.fields.room} onChange={this.handleCreateRoomChange} />
              <img src={roomIcon} alt="Room_icon" />
              <div className="errorMsg">{this.state.errors.room}</div>
            </div>
            <label className="checkbox">
              <input type="checkbox" onClick={this.togglePopupPassword.bind(this)} />
              {this.state.showPopupPassword ?
                <PopupPassword />
                :null
              }
              <span>Imposta password</span>
            </label>
            <Link onClick={this.submitCreateRoomForm}>
              <input type="submit" className="invita" value="Procedi"/>
            </Link>
            <Link to={"/chat?"}>
              <a><h30>Indietro</h30></a>
            </Link>
          </form>
      </div>
    );
  }
}

export default NewRoom;