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
        name_of_room: "",
        created_by: "",
        deleted_by: "",
        permiss: "",
        password: ""
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
      name_of_room: "",
      created_by: "",
      deleted_by: "",
      permiss: "",
      password: ""
    };

    const { created_by, name_of_room, permiss } = this.state.values;

    if (created_by.length < 4) {
      isError = true;
      errors.created_by = "Minimo 4 caratteri";
    }

    if (created_by.length > 8) {
      isError = true;
      errors.created_by = "Massimo 8 cratteri";
    }

    if (name_of_room.length < 4) {
      isError = true;
      errors.name_of_room = "Minimo 4 caratteri";
    }

    if (name_of_room.length > 10) {
      isError = true;
      errors.name_of_room = "Massimo 10 caratteri";
    }

    if (permiss.length < 1) {
      isError = true;
      errors.permiss = "Da compilare";
    }

    if (permiss.length  > 3) {
      isError = true;
      errors.permiss = "Massimo 3 caratteri";
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