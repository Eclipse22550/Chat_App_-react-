import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Reset.css';

export default function Reset() {

    return(
      <div className="align_align">
      <div className="card_card">
        <div className="head_head">
          <div></div>
            <Link to={"/reset"}>
              <a id="ripristina_credenziali_d'accesso" className="selected_selected">Ripristina credenziali d'accesso</a>
            </Link>
          <div></div>
        </div>
        <div className="tabs_tabs">
          <form className="box_b_box_b" id="box_b_box_b">
            <div className="inputs_inputs_inputs_inputs">
              <Link to={"/reset email"}>
                <button id="etrrt" className="etrrt">Email</button>
              </Link>
              <Link to={"/reset username"}>
                <button id="grdfgt" className="gretg">Username</button>
              </Link>
              <Link to={"/reset password"}>
                <button id="edsgfre" className="fsedfr">Password</button>
              </Link>
              <h6>
                La <Link to={"/information"}><a className="SK">S.K.</a></Link> è un'ulteriore livello di sicurezza per garantire la privacy dell'utente.
              </h6>
              <Link to={"/reset security key"}>
                <button id="sek_keyy" className="sek_keyy">Security Key</button>
              </Link>
              <Link to={"/"}>
                <a><h9>Indietro</h9></a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
}