import React from "react";
import MenuItem from "material-ui/MenuItem";
import Delete from "material-ui/svg-icons/action/delete";
import Checkbox from "material-ui/Checkbox";

const Task = props => (
  <MenuItem
    primaryText={props.nameProp}
    leftIcon={<Delete onClick={props.deleteTaskProp2} />}
    rightIcon={
      <Checkbox
      // checked={props.isCompleted}
      />
    }
  />
);

export default Task;
