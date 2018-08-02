import React from 'react'
import Form from './Form'
import List from './List'

class ToDo extends React.Component {
    render() {
        return (
            <div>
                <Form />
                <List />
            </div>
        )
    }
}

export default ToDo