import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

import './ResetUsername.css';

import emailIcon from '../../../icons/emailIcon.png';
import userIcon from '../../../icons/userIcon.png';
import passwordIcon from '../../../icons/passwordIcon.png';

import PopupResetUsername from './PopupResetUsername/PopupResetUsername';

class ResetUsername extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: ""
    };

    this.state = {
      fields: {},
      errors: {}
    }

    this.state = {
      showPopupResetUsername: false
    }

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.ShowPass = this.ShowPass.bind(this);
  };

  togglePopupResetUsername() {
    this.setState({
      showPopupResetUsername: !this.state.showPopupResetUsername
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

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
       formIsValid = false;
       errors["name"] = "Cannot be empty";
    }

    if(typeof fields["name"] !== "undefined"){
       if(!fields["name"].match(/^[a-zA-Z]+$/)){
          formIsValid = false;
          errors["name"] = "Only letters";
       }        
    }

    //Email
    if(!fields["email"]){
       formIsValid = false;
       errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
       let lastAtPos = fields["email"].lastIndexOf('@');
       let lastDotPos = fields["email"].lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
   }  

   this.setState({errors: errors});
   return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
       alert("Dati inviati");
    }else{
       alert("Errori nei dati")
    }

  }

  handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
  }

  render() {
    return(
      <div className="aligned_aligned">
        <div className="carded_carded">
          <div className="headed_headed">
            <div></div>
            <a id="resetusername" className="selected_selected_selected" href="#resetusername">Recupera username</a>
            <div></div>
          </div>
          <div className="tabsed_tabsed">
            <form className="boxed_boxed" id="boxed_boxed" onSubmit= {this.contactSubmit.bind(this)}>
              <div className="inputed_inputed">
                <div className="inputeds_inputeds">
                  <input className="users_users" type="text" placeholder="Email" name="email" reuired />
                  <img src={emailIcon} alt="Email_icon" />
                </div>
                <div className="inputsing_inputsing">
                  <input className="sk_sk" type="text" placeholder="Ultimo username" name="ultimo_username" required />
                  <img src={userIcon} alt="User_icon" />
                </div>
                <div className="inputeds_inputeds">
                  <input class="users_users" type={this.state.hidden ? "password" : "text"} placeholder="Password" name="password" reuired />
                  <img src={passwordIcon} alt="Password_icon" />
                </div>
                <label className="checkboxed_checkboxed">
                    <input type="checkbox" onClick={this.ShowPass} />
                    <span>Mostra password</span>
                </label>
                <Link onClick={this.togglePopupResetUsername.bind(this)}>
                  <button id="procede_procede" class="procedes_procedes">Recupera</button>
                  {this.state.showPopupResetUsername ?
                    <PopupResetUsername />
                    : null
                  }
                </Link>
                <Link to={"/reset"}>
                  <a><h11>Indietro</h11></a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );  
  };
};

export default ResetUsername;