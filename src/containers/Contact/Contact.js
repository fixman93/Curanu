import React, { Component } from 'react'

import Header from '../../common/Header/index'
import SideBar from './sideBar'
import Container from '../../common/Container/'
import FormErrors from './FormErrors'

import './Contact.scss'

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      formErrors: { name: '', email: '', subject: '', message: '' },
      namelValid: false,
      emailValid: false,
      subjectValid: false,
      messageValid: false,
      formValid: false
    }
  }
  handleInput(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value },
      () => { this.validateField(name, value) })
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let subjectValid = this.state.subjectValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'name':
        nameValid = value.length >= 1;
        fieldValidationErrors.name = nameValid ? '' : ' Please enter text';
        break;
      case 'subject':
        subjectValid = value.length >= 1;
        fieldValidationErrors.subject = subjectValid ? '' : ' Please enter text';
        break;
      case 'message':
        messageValid = value.length >= 1;
        fieldValidationErrors.message = messageValid ? '' : ' Please enter text';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      emailValid: emailValid,
      subjectValid: subjectValid,
      messageValid: messageValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.nameValid && this.state.emailValid && this.state.subjectValid && this.state.messageValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }
  render() {
    return (
      <div>
        <Header />
        <Container class='container flex form'>
          <SideBar />
          <div className='contact-form'>
            <h1>Contact pagina</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque convallis, magna nec efficitur tempor, dui eros fringilla tellus, vitae consequat augue dolor at mauris. Nunc tempor rutrum dolor, sit amet scelerisque lacus feugiat non. Maecenas a tincidunt justo, ac blandit arcu. Sed nec congue ex. Nullam pulvinar libero eu dolor congue commodo. Nam sed pharetra orci. Nunc ultrices sit amet magna non vestibulum. Morbi ut dignissim quam. Etiam eget pellentesque nisi.</p>
            <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <form className="demoForm">
              <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                <label>Naam:</label>
                <input type='text' name='name' onChange={(event) => this.handleInput(event)} placeholder='Enter your name' value={this.state.name} />
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <label>Email:</label>
                <input type='text' name='email' onChange={(event) => this.handleInput(event)} placeholder='Enter your email' value={this.state.email} />
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                <label>Onderwerp:</label>
                <input type='text' name='subject' onChange={(event) => this.handleInput(event)} placeholder='Enter your subject' value={this.state.subject} />
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                <label>Bericht:</label>
                <textarea name='message' onChange={(event) => this.handleInput(event)} placeholder='Enter your message' value={this.state.message}></textarea>
              </div>
              <div className='submit'>
                <button type='submit' className={!this.state.formValid ? 'btn error' : 'btn'} disabled={!this.state.formValid}>Verstuur</button>
              </div>
            </form>
          </div>
        </Container>
      </div>
    )
  }
}

export default Contact