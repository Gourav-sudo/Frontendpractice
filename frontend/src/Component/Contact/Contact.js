import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', pass);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <nav className="contact-nav">
        <Link to='/Contact/services'>Our Services</Link>
        <Link to='/Contact/Blog'>Blogs</Link>
      </nav>
      <form onSubmit={handleSubmit} className="contact-form">
        <table>
          <thead>
            <tr>
              <th>Contact Form</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input 
                  type='text' 
                  name='name' 
                  value={name} 
                  placeholder='Enter your name' 
                  onChange={handleNameChange} 
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input 
                  type='email' 
                  name='email' 
                  value={email} 
                  placeholder='Enter your email' 
                  onChange={handleEmailChange} 
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input 
                  type='password' 
                  name='pass' 
                  value={pass} 
                  placeholder='Enter your password' 
                  onChange={handlePasswordChange} 
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type='submit'>Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Contact;
