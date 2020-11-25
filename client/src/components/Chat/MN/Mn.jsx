import React, { Component } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Settings from '../../Settings/Settings';
import ToDoList from './To-Do-List';
import Upload from './Upload/Upload';

import './Mn.css';

class Mn extends Component {
    render() {
        return(
            <Router>
                <div id="Mn">
                    <div id="menu-mn">
                        <div id="menu">
                            <ul>
                                <li>
                                    <NavLink to="/chat" id="menu-mnmmg" return null>
                                        Chat<p></p><i class="fas fa-comments"></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/image" id="menu-mnmmg">
                                        Immagini<p></p><i class="fas fa-images"></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/room_disp" id="menu-mnmmg">
                                        Room<p></p><i class="fas fa-person-booth"></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" id="menu-mnmmg">
                                        Contatti<p></p><i class="far fa-id-badge"></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/call" id="menu-mnmmg">
                                        Chiamate<p></p><i class="fas fa-phone-volume"></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/archivio" id="menu-mnmmg">
                                        Archivio<p></p><i class="fas fa-archive"></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dati" id="center_mn">
                                        Date<p></p><i class="fas fa-calendar-day"></i>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <main id="contenuto-mn">
                        <Switch>
                            <Route path="/chat" exact component={Chat} return null />
                            <Route path="/image" component={Image} return null />
                            <Route path="/room_disp" component={Room_disp} return null />
                            <Route path="/contact" component={Contact} return null />
                            <Route path="/call" component={Call} return null />
                            <Route path="/archivio" component={Archivio} return null />
                            <Route path="/dati" component={Dati} return null />
                            <Route path="/Settings" component={Settings} return null />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}

const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.5
    },
    in: {
      opacity: 5,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
};
  
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const pageStyle = {
  position: "relative"
};

class Chat extends Component {
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
                <div id="Leftbar">
                    <div id="top-mn">
                        <div id="search-bar-mn">
                            <input type="text" className="fdghgf" name="fdghgf" placeholder="Cerca nelle chat..." />
                            <button type="submit" className="kjhliujlo" name="kjhliujlo"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
};

function Image() {
    return(
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div id="Image">
                <div id="allert-image">
                    <h500>Le immagini possono avere solo estensioni: <h501>PNG</h501>,<h501>JPG</h501></h500>
                </div>
                <div id="upload-image-image">

                </div>
            </div>
        </motion.div>
    );
};

function Room_disp() {
    return (
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div id="Room">
                <div id="top-mn">
                    <div id="search-bar-mn">
                        <input type="text" className="fdghgf" name="fdghgf" placeholder="Cerca nelle chat..." />
                        <button type="submit" className="kjhliujlo" name="kjhliujlo"><i class="fas fa-search"></i></button>
                    </div>
                </div>
                <div id="list-room-pub">
                    <h1>Lista</h1>
                </div>
            </div>
        </motion.div>
    );
}

class Contact extends Component {
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
                <div id="Contact">
                    <h1>Contatti</h1>
                </div>
            </motion.div>
        );
    }
};

function Call() {
    return(
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div id="Call">
                <h1>Chiamate</h1>
            </div>
        </motion.div>
    );
};

function Archivio() {
    return(
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div id="Archivio">
                <h1>Archivio</h1>
            </div>
        </motion.div>
    );
};

class Dati extends Component {
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
                <div id="Dati">

                </div>
            </motion.div>

        );
    }
};

export default Mn;