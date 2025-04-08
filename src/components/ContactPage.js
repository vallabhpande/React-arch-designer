import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4qntza8',
      'template_lwo0h2j',
      form.current,
      'nPCkXMArzb6sOXFba'
    ).then((result) => {
      console.log(result.text);
      setSent(true);
      setError(false);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      setError(true);
    });
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact Us 📧</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="title" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" required rows="5"></textarea>
        <button type="submit">Send Message</button>

        {sent && <p className="success-message">Message Sent ✅</p>}
        {error && <p className="error-message">Failed to Send ❌</p>}
      </form>
    </div>
  );
};

export default ContactForm;