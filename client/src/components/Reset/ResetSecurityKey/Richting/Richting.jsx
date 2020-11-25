import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Popup from '../Richting/Popup';

import './Richting.css';

class Richting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        };

        this.state = {
            hidden: true,
            password: ""
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.ShowPass = this.ShowPass.bind(this);
    };

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
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

    render() {
        return(
            <div id="Richting">
                <div id="text-camp">
    
                </div>
                <div id="inputs_inputs_inputs">
                    <div id="campi">
                        <input className="email" type="email" id="email" placeholder="Email" />
                    </div>
                    <div id="campi">
                        <input className="emails" type="email" id="emails" placeholder="Email di recupero" />
                    </div>
                    <div id="campi">
                        <input className="username" id="username" type="text" placeholder="Username" />
                    </div>
                    <div id="campi">
                        <input className="sd" id="sd" type="text" placeholder="Domanda di sicurezza" />
                    </div>
                    <div id="camps">
                        <input className="password" type={this.state.hidden ? "password" : "text"} id="password" placeholder="Password" />
                        <button onClick={this.ShowPass} type="submit" className="show-pass" id="show_pass"><i class="far fa-eye"></i></button>
                    </div>
                    <div id="campi">
                        <input className="phone" id="phone" type="phone" placeholder="Numero di telefono" />
                    </div>
                    <Link onClick={this.togglePopup.bind(this)}>
                        {this.state.showPopup ?
                            <Popup
                                text='Click "Close Button" to hide popup'
                                closePopup={this.togglePopup.bind(this)}
                            />
                            : null
                        }
                        <button type="submit" className="btn-proc">Invi i dati<i class="fas fa-rss"></i></button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Richting;