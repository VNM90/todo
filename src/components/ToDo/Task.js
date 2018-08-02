import React from 'react'
import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';

const Task = (props) => (
    <MenuItem
    primaryText={`Section task`}
    rightIcon={<Delete onClick={() => alert('Click')}/>}
    />
)

export default Task