

import React, { useState , useRef} from 'react';
import './componentsCss/Contactus.css';

import ReCAPTCHA from "react-google-recaptcha";
export default function Contactus() {
  const recaptchaRef = useRef();
  const[verified , setVerified] = useState(false)
  const captcha=()=>{
    setVerified(true)
  }
  const [formData, setFormData] = useState({
    topic: '',
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.topic) errors.topic = 'Topic is required';
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage('Your query has been received. We will get back to you soon.');
        setFormData({ topic: '', name: '', email: '', message: '' });
        setErrors({});
        
       setTimeout(()=>{
          setSuccessMessage(null)
        },2000)
        recaptchaRef.current.reset();
      } else {
        const errorData = await response.json();
        setErrors({ server: errorData.message });
      }
    } catch (error) {
      setErrors({ server: 'Failed to submit the form. Please try again later.' });
    }
    setVerified(false)
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us, We're Ready to Help!</h1>
        <div className="about">
          <p>We strive to provide you with the best<br/>
          experience and the best platform to find your<br/>
          choice</p>
        </div>
        <p style={{fontSize: '17px', color: '#848887'}}>
          Post us any queries and we'll get back to you.
        </p>
        <div className="contact-details">
          <div className="chat">
            <div className="logo">
              <img src="https://toletglobe.in/static/media/message-img.144bd6d1d0ac26a9ead3.png" alt="" />
            </div>
            <div className="chattext about">
              <h4>Chat with us !!</h4>
              <p>Our friendly team is here to help</p>
              <a className='links' href="mailto:hello@example.com" style={{textDecoration: 'none'}}>
                <p>hello@toletglobe.in</p>
              </a>
            </div>
          </div>
          <div className="call">
            <div className="logo">
              <img src="https://toletglobe.in/static/media/call-img.9011b8ef4c16ad959d2c.png" alt="" />
            </div>
            <div className="chattext about">
              <h4>Call us..</h4>
              <p>Mon - fri 8 am to 10 pm</p>
              <a className='links' style={{color: 'white', textDecoration: 'none'}} href="tel:+918707727347">
                <p>+91 9876543210</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="topic">Topic</label>
          <select id="topic" name="topic" value={formData.topic} onChange={handleChange}>
            <option value="">Select a topic</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
          {errors.topic && <p className="error">{errors.topic}</p>}

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="name@provider.com" value={formData.email} onChange={handleChange} required />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Type your message..." value={formData.message} onChange={handleChange} required></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
          <ReCAPTCHA
            ref={recaptchaRef}
    sitekey="6LeaAA4qAAAAALRWjSGvyA6ZrBSmCTcD8-NGSuzo"
   onChange={captcha}
     theme="dark"
  required/>
          <button type="submit" disabled = {verified===false}>Submit Query</button>
          {errors.server && <p className="error">{errors.server}</p>}
        </form>
      </div>
    </div>
  );
}



