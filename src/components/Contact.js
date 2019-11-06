import React from 'react';
import './Contact.css';
import logo from '../assets/img/logo.png';

class Contact extends React.Component {
  render() {
    return (
      <div class="container-form">
        <div class="contactform">
          <img src={logo} alt="logo" />
          <p>Hi (pseudo), contact us !</p>
          <input type="email" placeholder="write your email" />
          <textarea className="textarea" type="textarea" placeholder="Tell us a joke"></textarea>
          <button>SEND !</button>
        </div>
      </div>
    );
  }
}

export default Contact;
