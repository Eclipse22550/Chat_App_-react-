import React, { Component } from 'react';
import { Icon, Label, Table } from 'semantic-ui-react'
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route, NavLink, Link } from "react-router-dom";

import './ContentSett.css';

class ContentSett extends Component {
    render() {
      return (
        <Router>
          <div id="Page">
            <div id="Menu">
              <div className="search_search">
                <div className="bar_bar">
                  <input className="b_b" id="b_b" type="text" placeholder="Cerca nelle impostazioni..." name="search-box" />
                  <button className="btn_btn" id="btn_btn" type="submit" name="research-button_research"><i class="fas fa-search"></i></button>
                </div>
              </div>
              <div id="men">
                <div id="menu_menu">
                  <nav className="col-6 col-sm-4 col-md-2 bg-dark py-5" style={{ height: "auto", zIndex: 1000 }} >
                        <ul>
                            <li>
                              <NavLink to="/Settings" id="information" id="center_mnmm" className="active" className="nav-link" return null>
                                Informazioni generali
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/information chat" id="center_mnmm" className="nav-link">
                                Informazioni chat
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/account" id="center_mnmm" className="nav-link">
                                Account utente
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/notification" id="center_mnmm" className="nav-link">
                                Notifiche
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/memorie" id="center_mnmm" className="nav-link">
                                Memoria
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/release notes" id="center_mnmm" className="nav-link">
                                Note di rilascio
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/contact admin" id="center_mnmm" className="nav-link">
                                Contatta admin
                              </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>             
              </div>
            </div>
            <div id="Contenting">
              <main className="visualize">
                <Switch>
                  <Route path="/Settings" exact component={Settings} return null />
                  <Route path="/information chat" component={Info_chat} return null />
                  <Route path="/account" component={Account} return null />
                  <Route path="/notification" component={Notification} return null />
                  <Route path="/memorie" component={Memorie} return null />
                  <Route path="/release notes" component={Relase_note} return null />
                  <Route path="/contact admin" component={Contact_admin} return null />
                </Switch>
              </main>
            </div>
          </div>
        </Router>
      );
    };
};

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.3
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
};

const pageStyle = {
  position: "relative"
};

class Settings extends Component {
  render() {
    return(
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      > 
        <div id="Infomation">
          <div id="title-sec-info">
            <h156>Informazioni generali</h156>
          </div>
          <div id="i-content">
            <div id="table-connectivity">
              <Table celled className="table1">
                <Table.Header className="headTable1" thead>
                  <Table.Row>
                    <Table.HeaderCell className="header_cell">Parametro</Table.HeaderCell>
                    <Table.HeaderCell className="header_cell">Valore</Table.HeaderCell>
                    <Table.HeaderCell className="header_cell1">Stato</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">
                      <Label ribbon>Indirizzo IP</Label>
                    </Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h190>185.698.25.256</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h192><i class="fas fa-user-check"></i></h192></Table.Cell>
                  </Table.Row>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">Indirizzo WIFI MAC</Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h190>D0:7F:A0:7E:6B:9B</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h192><i class="fas fa-user-check"></i></h192></Table.Cell>
                  </Table.Row>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">Indirizzo MAC Ethernet</Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h191>Non disponibile!</h191></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h191><i class="fas fa-user-times"></i></h191></Table.Cell>
                  </Table.Row>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">Indirizzo Bluethooth</Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h190>D0:7F:A0:7E:6B:9A</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h192><i class="fas fa-user-check"></i></h192></Table.Cell>
                  </Table.Row>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">Tempo d'utilizzo</Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h190>15:55:06</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h193><i class="fas fa-sync"></i></h193></Table.Cell>
                  </Table.Row>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">Stato dell'applicazione</Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h190>Funzionante</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h192><i class="fas fa-user-check"></i></h192></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            <div id="table-developement">
              <Table celled className="table1">
                <Table.Header className="headTable1" thead>
                  <Table.Row>
                    <Table.HeaderCell className="header_cell">Parametro</Table.HeaderCell>
                    <Table.HeaderCell className="header_cell">Valore</Table.HeaderCell>
                    <Table.HeaderCell className="header_cell">Web</Table.HeaderCell>
                    <Table.HeaderCell className="header_cell1">Mobile</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">
                      <Label ribbon>Versione UI</Label>
                    </Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h190>1.1.1</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell114"><h192><i class="fas fa-user-check"></i></h192></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h191><i class="fas fa-user-times"></i></h191><p></p><h190>1.1.2</h190></Table.Cell>
                  </Table.Row>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">Versione UX</Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h190>1.2.1</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell114"><h192><i class="fas fa-user-check"></i></h192></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h192><i class="fas fa-user-check"></i></h192></Table.Cell>
                  </Table.Row>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">Sicurezza dell'app</Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h190>1.2.2.3</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell114"><h193><i class="fas fa-sync"></i></h193></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h191><i class="fas fa-user-times"></i></h191><p></p><h190>1.1.2.3</h190></Table.Cell>
                  </Table.Row>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">Ultima modifica</Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h190>In modifica</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell114"><h193><i class="fas fa-sync"></i></h193></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h193><i class="fas fa-sync"></i></h193></Table.Cell>
                  </Table.Row>
                  <Table.Row className="table1-row">
                    <Table.Cell className="table1-row-cell">Prossimo aggiornamento</Table.Cell>
                    <Table.Cell className="table1-row-cell11"><h190>Aprile</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell114"><h192><i class="fas fa-user-check"></i></h192><p></p><h190>05.04.2020</h190></Table.Cell>
                    <Table.Cell className="table1-row-cell111"><h192><i class="fas fa-user-check"></i></h192><p></p><h190>17.04.2020</h190></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }  
};

function Info_chat() {

  return(
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="Info_chat">
        <div id="title-sec-ic">
          <h156>Informazioni sulla chat</h156>
        </div>
        <div id="ic-content">

        </div>
      </div>
    </motion.div>
  );
};


function Account() {

  return(
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="Account">
        <div id="title-sec">
          <h151>Account utente</h151>
        </div>
        <div id="a-content">

        </div>
      </div>
    </motion.div>
  );
};

function Notification() {

  return(
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="Notification">
        <div id="title-sec-not">
          <h152>Notifiche</h152>
        </div>
        <div id="n-content">

        </div>
      </div>
    </motion.div>
  );
};

function Memorie() {

  return(
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="Message_saved">
        <div id="title-sec-sav">
          <h153>Memoria</h153>
        </div>
        <div id="ms-content">

        </div>
      </div>
    </motion.div>
  );
};

function Relase_note() {

  return(
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="Relase_note">
        <div id="title-sec-rn">
          <h154>Note di rilascio</h154>
        </div>
        <div id="rn-content">

        </div>
      </div>
    </motion.div>
  );
};

function Contact_admin() {

  return(
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div id="Contact_admin">
        <div id="title-sec-adm">
          <h155>Contatta admin</h155>
        </div>
        <div id="admin-contact">

        </div>
      </div>
    </motion.div>
  );
};

export default ContentSett;