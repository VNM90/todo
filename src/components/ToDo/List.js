import React from 'react'
import Task from './Task'

const List = (props) => (
    <div>
        {props.tasksProp.map(task =>(
        <Task
            nameProp = {task.name}
            deleteTaskProp2 = {() => props.deleteTaskProp(task.uid)}
        />
        ))}
        
    </div>
)

export default List