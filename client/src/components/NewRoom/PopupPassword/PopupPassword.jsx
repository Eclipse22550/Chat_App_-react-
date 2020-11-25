import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Toastify, { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './PopupPassword.css';

import passwordIcon from '../../../icons/passwordIcon.png';

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

class PopupPassword extends Component {
    constructor(props) {
		super(props);
		
    this.state = {
      hidden: true,
      password: ''
		};

		this.state = {
			fields: {},
			errors: {}
		}
		
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
	
	handlePopupPasswordChange(e) {
		let fields = this.state.fields;
		fields[e.target.name] = e.target.value;
		this.setState({
			fields
		});
	}

	submitPopupPasswordForm(e) {
		e.preventDefault();
		if (this.validatePopupPasswordForm()) {
			let fields = {};
			fields["password"] = "";
			this.setState({fields:fields});
			alert("Password immessa correttamente");
		}
	}

	validatePopupPasswordForm() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

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

		this.setState({
			errors: errors
		});

		return formIsValid
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
        
        return(
          	<div id="PopupPassword-outer">
                <div id="PopupPassword-inner">
                    <form method="post" className="boxpass" id="box_boxs" name="userRegistrationForm">
                      <h3>Imposta password</h3>
                        <div className="input_inputss">
                          <input className="password_password" type={this.state.hidden ? "password" : "text"} placeholder="Password" name="password" value={this.state.fields.password} onChange={this.handlePasswordChange} />
                          <img src={passwordIcon} alt="Password_icon" />
                          <div className="errorMsg">{this.state.errors.password}</div>
                        </div>
                        <label className="checkbox">
                          <input type="checkbox" onClick={this.ShowPass} />
                          <span>Mostra password</span>
                        </label>
                        <Link onClick={this.submitPopupPasswordForm}>
                          <input type="submit" className="invita" value="Procedi"/>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default PopupPassword;