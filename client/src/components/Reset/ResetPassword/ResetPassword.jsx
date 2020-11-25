import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";

import './ResetPassword.css';

import emailIcon from '../../../icons/emailIcon.png';
import userIcon from '../../../icons/userIcon.png';
import securityIcon from '../../../icons/securityIcon.png';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
        hidden: true,
        password: ""
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.ShowPass = this.ShowPass.bind(this);
  };

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
    return(
      <div className="aligned_aligned_aligned">
        <div className="carded_carded_carded">
          <div className="headed_headed_headed">
            <div></div>
            <a id="resetpassword" className="selected_selected_selected_selected" href="#resetpasswprd">Recupera password</a>
            <div></div>
          </div>
          <div className="tabsed_tabsed_tabsed">
            <form className="boxed_boxed_boxed" id="boxed_boxed_boxed">
              <div className="inputed_inputed_inputed">
                <div className="inputeds_inputeds_inputeds">
                  <input className="users_users_users" type="text" placeholder="Email" name="email" />
                  <img src={emailIcon} alt="Email_icon" />
                </div>
                <div className="inputeds_inputeds_inputeds">
                  <input class="users_users_users" type="text" placeholder="Username" name="username" />
                  <img src={userIcon} alt="user_icon" />
                </div>
                <div className="inputsing_inputsing_inputsing">
                  <input className="sk_sk_sk" type={this.state.hidden ? "password" : "text"} placeholder="Security Key" name="Security_key" />
                  <img src={securityIcon} alt="security_key" />
                </div>
                <label className="checkboxed_checkboxed">
                    <input type="checkbox" onClick={this.ShowPass} />
                    <span>Mostra password</span>
                </label>
                <Link>
                  <button id="procede_procede_procede" class="procedes_procedes_procedes">Recupera</button>
                </Link>
                <Link to={"/reset"}>
                  <a><h12>Indietro</h12></a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
}

export default ResetPassword;