import React, { Component } from 'react';
import { AnimatePresence, motion, useAnimatedState } from "framer-motion";
import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import orderBy from "lodash/orderBy";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";

import './ContentProfile.css';

import TableRoom from "./TableRoom/TableRoom";

import TableFriends from "./TableFriends/TableFriends";

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class ContentProfile extends Component {
  render() {
    return(
      <Router>
          <div id="ContentProfile">
              <div id="ProfileMenu">
                  <div id="searchProfile">
                      <div className="barProfile">
                          <input className="b_p" type="text" placeholder="Cerca nel profilo..." name="device" />
                          <button className="btn_prof" type="submit" name="button-search-profile"><i class="fas fa-search"></i></button>
                      </div>
                  </div>
                  <div id="MenuProfile">
                      <div id="Menu_menu_profile">
                          <nav className="col-6 col-sm-4 col-md-2 bg-dark py-5" style={{ height: "auto", zIndex: 1000 }}>
                              <ul>
                                  <li>
                                      <NavLink name="Credenziali d'accesso" to="/Profile" id="menu-mnmm" exact>
                                          Credenziali d'accesso
                                      </NavLink>
                                  </li>
                                  <li>
                                      <NavLink name="Security Key" id="menu-mnmm" to="/security key">
                                          Security Key
                                      </NavLink>
                                  </li>
                                  <li>
                                      <NavLink name="Immagine profilo" id="menu-mnmm" to="/image profile">
                                          Immagine profilo
                                      </NavLink>
                                  </li>
                                  <li>
                                      <NavLink name="Room utente" id="menu-mnmm" to="/room user">
                                          Room utente
                                      </NavLink>
                                  </li>
                                  <li>
                                      <NavLink name="Amici invitati" to="/request friends" id="menu-mnmm">
                                          Amici invitati
                                      </NavLink>
                                  </li>
                                  <li>
                                      <NavLink name="Messaggi salvati" to="/message alert" id="menu-mnmm">
                                          Messaggi salvati
                                      </NavLink>
                                  </li>
                                  <li>
                                      <NavLink name="Privacy" to="/privacy" className="nav-link">
                                          Privacy
                                      </NavLink>
                                  </li>
                              </ul>
                          </nav>
                      </div>
                  </div>
              </div>
              <div id="ConteningProfile">
                  <main className="visualizing">
                      <Switch>
                        <Route path="/Profile" exact component={Profile} return null /> 
                        <Route path="/security key" component={SecurityKey} return null /> 
                        <Route path="/image profile" component={ImageProfile} return null />
                        <Route path="/room user" component={RoomUser} return null />
                        <Route path="/request friends" component={RequestFriends} return null /> 
                        <Route path="/message alert" component={MessageAlert} return null />           
                        <Route path="/privacy" component={Privacy} return null />          
                      </Switch>
                  </main>
              </div>
          </div>
      </Router>
    );
  }  
};

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

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
            password: ""
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.ShowPassword = this.ShowPassword.bind(this);
    };

    handlePassChange(e) {
        this.setState({ password: e.target.value });
    }

    ShowPassword() {
        this.setState({ hidden: !this.state.hidden });
    }

    componentDidMount() {
        if (this.props.password) {
            this.setState({ password: this.props.password });
        }
    }
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
                <div id="access_credential">
                    <div id="title-sec-access">
                        <h160>Credenziali d'accesso</h160>
                    </div>
                    <div id="a-content">

                    </div>
                </div>
            </motion.div>
        );
    }
};

function SecurityKey() {

    return(
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        > 
            <div id="security_key">
                <div id="title-sec-sk">
                    <h161>Security Key</h161>
                </div>
                <div id="sk-content">

                </div>
            </div>
        </motion.div>
    );
};

function ImageProfile() {

    return(
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div id="image_profile">
                <div id="title-sec-imp">
                    <h162>Immagine profilo</h162>
                </div>
                <div id="imp-content">

                </div>
            </div>
        </motion.div>
    );
};

class RoomUser extends Component {
    state = {
      data: [
        {
          name_of_room: "User",
          created_by: "Admin",
          deleted_by: "------",
          permiss: "000",
          password: "780Impdfdoangey"
        }
      ],
      editIdx: -1,
      columnToSort: "",
      sortDirection: "desc"
    };
    
    handleRemove = i => {
      this.setState(state => ({
        data: state.data.filter((row, j) => j !== i)
      }));
    };
  
    startEditing = i => {
      this.setState({ editIdx: i });
    };
  
    stopEditing = () => {
      this.setState({ editIdx: -1 });
    };
  
    handleSave = (i, x) => {
      this.setState(state => ({
        data: state.data.map((row, j) => (j === i ? x : row))
      }));
      this.stopEditing();
    };
    
    handleSort = columnName => {
        this.setState(state => ({
          columnToSort: columnName,
          sortDirection:
            state.columnToSort === columnName
              ? invertDirection[state.sortDirection]
              : "asc"
        }));
    };

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
                <div id="room_user">
                    <div id="title-sec-ru">
                        <h163>Room utente</h163>
                    </div>
                    <div id="ru-content">
                        <div id="table-roomen">
                            <MuiThemeProvider>
                                <TableRoom
                                    handleSort={this.handleSort}
                                    handleRemove={this.handleRemove}
                                    startEditing={this.startEditing}
                                    editIdx={this.state.editIdx}
                                    stopEditing={this.stopEditing}
                                    handleSave={this.handleSave}
                                    columnToSort={this.state.columnToSort}
                                    sortDirection={this.state.sortDirection}
                                    data={orderBy(
                                      this.state.data,
                                      this.state.columnToSort,
                                      this.state.sortDirection
                                    )}
                                    header={[
                                      {
                                        name: "Nome della camera",
                                        prop: "name_of_room"
                                      },
                                      {
                                        name: "Creata da...",
                                        prop: "created_by"
                                      },
                                      {
                                        name: "Cancellata da...",
                                        prop: "deleted_by"
                                      },
                                      {
                                        name: "Permessi",
                                        prop: "permiss"
                                      },
                                      {
                                        name: "Password",
                                        prop: "password"
                                      }
                                    ]}
                                />
                            </MuiThemeProvider>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
};

class RequestFriends extends React.Component {
  state = {
    data: [
      {
        Name_of_friends: "Utente",
        Email_of_friends: "Utente@gmail.com",
        invite_on: "00.00.0000",
        Grade_of_friends: "Moderatore"
      }
    ],
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc",
    query: "",
    columnToQuery: "Name_of_friends"
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleSave = (i, x) => {
    this.setState(state => ({
      data: state.data.map((row, j) => (j === i ? x : row))
    }));
    this.stopEditing();
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    const lowerCaseQuery = this.state.query.toLowerCase();
      return(
          <motion.div
              style={pageStyle}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
          >
              <div id="request_friends">
                  <div id="title-sec-rf">
                      <h164>Amici invitati</h164>
                  </div>
                  <div id="rf-content">
                    <MuiThemeProvider>
                      <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", margin: "auto" }}>
                          <TextField
                            hintText="Query"
                            floatingLabelText="Query"
                            value={this.state.query}
                            onChange={e => this.setState({ query: e.target.value })}
                            floatingLabelFixed
                          />
                          <SelectField
                            style={{ marginLeft: "1em" }}
                            floatingLabelText="Seleziona una colonna"
                            value={this.state.columnToQuery}
                            onChange={(event, index, value) =>
                              this.setState({ columnToQuery: value })
                            }
                          >
                            <MenuItem value="Name_of_friends" primaryText="Username" />
                            <MenuItem value="Email_of_friends" primaryText="Email" />
                            <MenuItem value="invite_on" primaryText="Inviato il..." />
                            <MenuItem value="Grade_of_friends" primaryText="Grado" />
                          </SelectField>
                        </div>
                      </div>
                      <TableFriends
                        handleSort={this.handleSort}
                        handleRemove={this.handleRemove}
                        startEditing={this.startEditing}
                        editIdx={this.state.editIdx}
                        stopEditing={this.stopEditing}
                        handleSave={this.handleSave}
                        columnToSort={this.state.columnToSort}
                        sortDirection={this.state.sortDirection}
                        data={orderBy(
                          this.state.query
                            ? this.state.data.filter(x =>
                                x[this.state.columnToQuery]
                                  .toLowerCase()
                                  .includes(lowerCaseQuery)
                              )
                            : this.state.data,
                          this.state.columnToSort,
                          this.state.sortDirection
                        )}
                        header={[
                          {
                            name: "Username",
                            prop: "Name_of_friends"
                          },
                          {
                            name: "Email",
                            prop: "Email_of_friends"
                          },
                          {
                            name: "Invitato il...",
                            prop: "invite_on"
                          },
                          {
                            name: "Grado",
                            prop: "Grade_of_friends"
                          }
                        ]}
                      />
                    </MuiThemeProvider>
                  </div>
              </div>
          </motion.div>
      );
    }
};

function MessageAlert() {

    return(
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div id="message_alert">
                <div id="title-sec-ma">
                    <h166>Messaggi salvati</h166>
                </div>
                <div id="ma-content">

                </div>
            </div>
        </motion.div>
    );
};

function Privacy() {

    return(
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div id="privacy">
                <div id="title-sec-p">
                    <h165>Privacy</h165>
                </div>
                <div id="p-content">

                </div>
            </div>
        </motion.div>
    );
};

export default ContentProfile;