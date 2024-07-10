import React from 'react'
import './componentsCss/Contactus.css'
export default function Contactus() {
  return (
    <div className="contact-container">
    <div className="contact-info">
        <h1>Contact Us, We're Ready to Help!</h1>
        <div className="about"><p>We strive to provide you with the best <br/>
        experience and the best platform to find your<br/>
        choice</p></div>
        <p style={{fontSize :'17px' , color : '#848887'}}>Post us any queries and we'll get back to you.</p>
        <div className="contact-details">
            <div className="chat">
                <div className="logo"><img src="https://toletglobe.in/static/media/message-img.144bd6d1d0ac26a9ead3.png" alt="" /> </div>
                <div className="chattext about"><h4>Chat with us !!</h4>
                <p>Our friendly team is here to help</p>
                <a className ='links'href="mailto:hello@example.com" style={{textDecoration : 'none'}}><p > hello@toletglobe.in</p></a>
                </div> </div>
            <div className="call">
            <div className="logo"><img src="https://toletglobe.in/static/media/call-img.9011b8ef4c16ad959d2c.png" alt="" /> </div>
                <div className="chattext about"><h4>Call us..</h4>
                <p>Mon - fri 8 am to 10 pm</p>
                <a className = 'links'style={{color : 'white' , textDecoration : 'none'}} href="tel:+918707727347"><p> +91 9876543210</p></a>
                </div>
            </div>
        </div>
    </div>
    <div className="contact-form">
        <form >
            <label htmlFor="topic">Topic</label>
            <select id="topic" name="topic">
                <option value="">select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
            </select>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="johndoe"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="name@provider.com"/>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Type your Message..."></textarea>
            <button type="submit">Submit query</button>
        </form>
    </div>
</div>

  )
}
