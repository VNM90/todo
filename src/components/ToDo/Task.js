import React from 'react'
import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';

const Task = (props) => (
    <MenuItem
    primaryText={props.nameProp}
    rightIcon={<Delete onClick={props.deleteTaskProp2}/>}
    />
)

export default Task