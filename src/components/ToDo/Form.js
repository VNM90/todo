import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const Form = props => (
  <div>
    <TextField
      value={props.newTaskNameProp}
      fullWidth={true}
      onChange={props.onNewTaskChangeProp}
    />
    <RaisedButton
      label={"DODAJ"}
      fullWidth={true}
      primary={true}
      onClick={props.addTaskProp}
    />
  </div>
);

export default Form;
