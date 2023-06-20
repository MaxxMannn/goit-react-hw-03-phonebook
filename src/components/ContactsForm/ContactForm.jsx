import React from 'react'
import {Container,Form,Button,Text,InputText} from './ContactFormStyled';
import PropTypes from 'prop-types'

class PhoneBookContainer extends React.Component { 

    state= {
        name: '',
        number: ''
    }
    currentName = (event) =>{
        const {name,value} = event.currentTarget
        this.setState({[name]:[value]})
    }
    
    addNewName = (event) =>{
        const {name,number} = this.state
        event.preventDefault()
        this.props.newState(name,number)

        const form = event.currentTarget
        form.reset()
    }

    render(){
    return (
        <Container>
        <Form onSubmit={this.addNewName}>
        <Text>Name</Text>
        <InputText
        onChange={this.currentName}
        type="text"
        name="name"
        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
        <Text>Number</Text>
        <InputText
        onChange={this.currentName}
            type="tel"
            name="number"
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <Button type='submit'>Add contact</Button>
        </Form>
        
        </Container>
    )
    } 
};

PhoneBookContainer.propTypes = {
    newState:PropTypes.func.isRequired,
}

export default PhoneBookContainer
