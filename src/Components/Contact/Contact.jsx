import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ad63f6ad-b16a-4838-9823-474485bd5f0c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='Contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I'm currently available to take on new projects, so fell free to send me a message about anything that you want to work on. You can contact anytime</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>loknathsahu852@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+91-7750-057515</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Odisha,India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your Email' name='email' />
            <label htmlFor="">Your Message</label>
            <textarea name="message"  rows="8" placeholder='Enter Your Message'></textarea>
            <button className='contact-submit' type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
