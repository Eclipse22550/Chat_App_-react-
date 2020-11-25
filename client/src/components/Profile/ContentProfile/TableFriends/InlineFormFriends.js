import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import CheckIcon from "material-ui/svg-icons/navigation/check";
import CancelIcon from "material-ui/svg-icons/navigation/cancel";
import { TableRow, TableRowColumn } from "material-ui/Table";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        ...props.x
      },
      errors: {
        Name_of_friends: "",
        Email_of_friends: "",
        invite_on: "",
        Grade_of_friends: ""
      }
    };
  }

  change = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      values: {
        ...state.values,
        [name]: value
      }
    }));
  };

  validate = () => {
    let isError = false;
    const errors = {
      Name_of_friends: "",
      Email_of_friends: "",
      invite_on: "",
      Grade_of_friends: ""
    };

    const { invite_on, Email_of_friends, Name_of_friends } = this.state.values;

    if (invite_on.length < 8) {
      isError = true;
      errors.invite_on = "DD:MM:HH";
    }

    if (Email_of_friends.indexOf("@") === -1) {
      isError = true;
      errors.Email_of_friends = "Manca l''@";
    }

    if (Email_of_friends.indexOf(".") === -1) {
      isError = true;
      errors.Email_of_friends = "Manca il '.'";
    }

    if (Email_of_friends.indexOf("com") === -1) {
      isError = true;
      errors.Email_of_friends = "Manca il dominio";
    }

    this.setState({
      errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.handleSave(this.props.i, this.state.values);
    }
  };

  render() {
    const { header, x, i } = this.props;
    return [
      header.map((y, k) => (
        <TableRowColumn key={`trc-${k}`}>
          <TextField
            name={y.prop}
            onChange={this.change}
            value={this.state.values[y.prop]}
            errorText={this.state.errors[y.prop]}
          />
        </TableRowColumn>
      )),
      <TableRowColumn key="icon-row-column">
        <CheckIcon onClick={this.onSubmit} />
        <CancelIcon onClick={this.props.stopEditing} />
      </TableRowColumn>
    ];
  }
}