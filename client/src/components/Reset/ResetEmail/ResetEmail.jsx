import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

import './ResetEmail.css';

import userIcon from '../../../icons/userIcon.png';
import passwordIcon from '../../../icons/passwordIcon.png';
import securityIcon from '../../../icons/securityIcon.png';

import PopupResetEmail from './PopupResetEmail/PopupResetEmail';

class ResetEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopupResetEmail: false
    }

    this.state = {
      hidden: true,
      password: ""
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.ShowPass = this.ShowPass.bind(this);
  }

  togglePopupResetEmail() {
    this.setState({
      showPopupResetEmail: !this.state.showPopupResetEmail
    });
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

  render(values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit) {
    return(
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
          }, 500);
        }}

        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required("Completare il campo"),
          password: Yup.string()
            .required("No password provided.")
            .min(8, "Password troppo corta.")
            .matches(/(?=.*[0-9])/, "La password deve contenere caratteri dell'alfabeto.")
        })}
      >
        <div className="aligned">
          <div className="carded">
            <div className="headed">
              <div></div>
              <a id="resetemail" className="selected_selected" href="#resetemail">Recupera email</a>
              <div></div>
            </div>
            <div className="tabsed">
              <form className="boxed" id="boxed" onSubmit={handleSubmit}>
                <div className="inputed">
                  <div className="inputeds">
                    <input className="users" type="text" placeholder="Username" name="username" />
                    <img src={userIcon} alt="User_icon" />
                  </div>
                  <div className="input_input_input">
                    <input class="users" type={this.state.hidden ? "password" : "text"} placeholder="Password" name="password" />
                    <img src={passwordIcon} alt="Password" />
                  </div>
                  <div className="inputsing">
                    <input className="sk" type={this.state.hidden ? "password" : "text"} placeholder="Security Key" name="SK" />
                    <img src={securityIcon} alt="Security_key" />
                  </div>
                  <label className="checkboxed_checkboxed">
                      <input type="checkbox" onClick={this.ShowPass} />
                      <span>Mostra password</span>
                  </label>
                  <h6>L'email arriverà sulla mail di recupero.</h6>
                  <Link onClick={this.togglePopupResetEmail.bind(this)}>
                    <button id="procede" class="procedes" disabled={isSubmitting}>Recupera</button>
                      {this.state.showPopupResetEmail ?
                          <PopupResetEmail />
                        : null
                      }
                  </Link>
                  <Link to={"/reset"}>
                    <a><h10>Indietro</h10></a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Formik>
    );
  }
}

export default ResetEmail;