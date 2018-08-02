import React from 'react'
import Form from './Form'
import List from './List'
import Container from '../Container';

class ToDo extends React.Component {
    render() {
        return (
            <div>
                <Container>
                <Form />
                </Container>
                <Container>
                <List />
                </Container>
            </div>
        )
    }
}

export default ToDo