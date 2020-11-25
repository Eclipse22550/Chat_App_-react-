import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './Register.css';

import emailIcon from '../../icons/emailIcon.png';
import email from '../../icons/email.png';
import countryIcon from '../../icons/countryIcon.png';

toast.configure();

const TextNotifySuccess = () => {
  return(
    <div>
      <h7>Modulo corretto!</h7>
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


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      fields: {},
      errors: {}
    }

    this.handleRegisterChange = this.handleRegisterChange.bind(this);
    this.submitRegisterForm = this.submitRegisterForm.bind(this);
  }

  handleRegisterChange = async e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    await this.setState({
      fields,
      email : e.target.value,
      email_of_recupero : e.target.value,
      nationality : e.target.value
    });
  }

  submitRegisterForm(e) {
    e.preventDefault();
    if (this.validateRegisterForm()) {
      let fields = {};
      fields["email"] = "";
      fields["email_of_recupero"] = "";
      fields["nationality"] = "";
      this.setState({
        fields:fields
      });
    }
    this.setState({
      formIsValid: true
    });
    console.log(this.state.fields);
    let formData = new FormData();
    formData.append("email,email_of_recupero,nationality", this.state.fields);
    const url = "http://localhost/server/Register/Reg.php";
    axios.post(url, formData)
    .then(res => alert(res.data))
    .catch(err => alert(err))
  }

  validateRegisterForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Immetti la tua email.";
    }
    if (typeof fields["email"] !== "undefined") {
      if (!fields["email"].match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        formIsValid = false;
        errors["email"] = "L'email deve contenere '@' e '.'";
      }
    }

    if (!fields["email_of_recupero"]) {
      formIsValid = false;
      errors["email_of_recupero"] = "Immetti la tua email di recupero.";
    }
    if (typeof fields["email_of_recupero"] !== "undefined") {
      if (!fields["email_of_recupero"].match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        formIsValid = false;
        errors["email_of_recupero"] = "L'email deve contenere '@' e '.'";
      }
    }

    if (!fields["nationality"]) {
      formIsValid = false;
      errors["nationality"] = "Immetti la tua nazionalità.";
    }
    if (typeof fields["nationality"] !== "undefined") {
      if (!fields["nationality"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["nationality"] = "Immetti solo caratteri dell'alfabeto.";
      }
    }

    this.setState({
      errors:errors
    });

    return formIsValid;
  }

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressedRegister.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressedRegister.bind(this));
  }      

  onKeyPressedRegister(e) {
    console.log(e.keyCode);
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

    return(
      <div className="allign">
        <div className="carte">
          <div className="testa">
            <div></div>
              <Link to={"/"}>
                <a id="login">Login</a>
              </Link>
              <Link to={"/register"}>
                <a id="register" className="selezionato" >Register</a>
              </Link>
              <div></div>
          </div>
          <div className="tavolo">
            <form className="posto" id="posto" method="POST" action="http://localhost/server/Register/Register.php" onSubmit={this.submitRegisterForm}>
              <div className="scrivis">
                <div className="scrive">
                  <input className="utente" type="text" placeholder="Email" name="email" value={this.state.fields.email} onChange={this.handleRegisterChange} onKeyDown={this.onKeyPressedRegister} />
                  <img src={emailIcon} alt="email_icon" />
                  <div className="errorMsg">{this.state.errors.email}</div>
                </div>
                <div className="scrive">
                  <input class="utente" type="text" placeholder="Password" name="email" value={this.state.fields.email_of_recupero} onChange={this.handleRegisterChange} onKeyDown={this.onKeyPressedRegister} />
                  <img src={email} alt="email" />
                  <div className="errorMsg">{this.state.errors.email_of_recupero}</div>
                </div>
                <label className="checkbox_check">
                    <input type="checkbox" onKeyDown={this.onKeyPressedRegister} />
                    <span>Abbonati alla newsletter</span>
                </label>
                <Link onClick={this.submitRegisterForm}>
                  <button id="register" class="register">Continua</button>
                </Link>
                <Link>
                  <a><h13>Assistenza</h13></a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Register;