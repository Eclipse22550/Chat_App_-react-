import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from "axios";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import userIcon from '../../icons/userIcon.png';
import passwordIcon from '../../icons/passwordIcon.png';

import './Login.css';

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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: "",
      hidden: true,
      fields: {},
      errors: {}
    };

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.submitLoginForm = this.submitLoginForm.bind(this);

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.ShowPass = this.ShowPass.bind(this);
  };

  handleLoginChange = async e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    await this.setState({
      fields,
      name : e.target.value,
      password : e.target.value
    });
  }

  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateLoginForm()) {
      let fields = {};
      fields["name"] = "";
      fields["password"] = "";
      this.setState({
        fields:fields
      });
    }
    this.setState({formIsValid: true});
    console.log(this.state.fields);
    let formData = new FormData();
    formData.append("name", this.state.fields.name);
    formData.append("password", this.state.fields.password);
    const url = "http://localhost/server/Login/Login.php";
    axios.post(url, formData)
    .then(res => alert(res.data))
    .catch(err => alert(err))
  }

  validateLoginForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Immetti il tuo username.";
    }
    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "L'username deve contenere lettere dell'alfabeto.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Immetti la tua password";
    }
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["password"] = "La password non è sicura";
      }
    }

    this.setState({
      errors:errors
    });

    return formIsValid;
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  ShowPass() {
    this.setState({ hidden: !this.state.hidden });
    console.log("Stringa convertita.")
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }      

  onKeyPressed(e) {
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

    return (
      <div className="align">
      <div className="login-message"></div>
        <div className="card">
          <div className="head">
            <div></div>
            <Link to={"/"}>
              <a id="login" className="selected" >Login</a>
            </Link>
            <Link to={"/register"}>
              <a id="register">Register</a>
            </Link>
            <div></div>
          </div>
          <div className="tabs">
            <form className="box_b" id="box_b" method="POST" action="http://localhost/server/Login/Login.php" onSubmit={this.submitLoginForm}>
              <div className="inputs_inputs">
                <div className="input_input_input">
                  <input className="user" type="text" placeholder="Username" name="name" value={this.state.fields.name} onChange={this.handleLoginChange} onKeyDown={this.onKeyPressed} />
                  <img src={userIcon} alt="User_icon" />
                  <div className="errorMsg">{this.state.errors.name}</div>
                </div>
                <div className="input_input_input">
                  <input class="user" type={this.state.hidden ? "password" : "text"} placeholder="Password" name="password" value={this.state.fields.password} onChange={this.handleLoginChange} onKeyDown={this.handleKeyDownLogin} />
                  <img src={passwordIcon} alt="Password" />
                  <div className="errorMsg">{this.state.errors.password}</div>
                </div>
                <label className="checkbox">
                    <input type="checkbox" onClick={this.ShowPass} />
                    <span>Mostra password</span>
                </label>
                <p></p>
                <label className="checkbox">
                    <input type="checkbox" />
                    <span>Ricorda username</span>
                </label>
                <Link onClick={this.submitLoginForm}>
                  <button id="login" class="login">Login</button>
                </Link>
                <Link to={"/reset"}>
                  <a><h8>Ripristino credenziali</h8></a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );  
  }
};

export default Login;