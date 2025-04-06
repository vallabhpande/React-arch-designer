import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4qntza8',          // Service ID
      'template_lwo0h2j',         // Template ID
      form.current,
      'nPCkXMArzb6sOXFba'         // Public Key
    ).then((result) => {
      console.log(result.text);
      setSent(true);
      setError(false);
      form.current.reset(); // reset form after submit
    }, (error) => {
      console.log(error.text);
      setError(true);
    });
  };

  return (
    <div style={{ padding: '2rem', background: '#111', color: '#fff', minHeight: '100vh' }}>
      <h2 style={{ color: '#00ffff', marginBottom: '2rem' }}>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <input type="text" name="name" placeholder="Your Name" required style={inputStyle} />
        <input type="email" name="email" placeholder="Your Email" required style={inputStyle} />
        <input type="text" name="title" placeholder="Subject" required style={inputStyle} />
        <textarea name="message" placeholder="Your Message" required rows="5" style={inputStyle}></textarea>
        <button type="submit" style={buttonStyle}>Send Message</button>

        {sent && <p style={{ color: 'lightgreen', marginTop: '1rem' }}>Message Sent ✅</p>}
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>Failed to Send ❌</p>}
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  marginBottom: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #00ffff',
  background: '#222',
  color: '#fff'
};

const buttonStyle = {
  padding: '0.8rem 2rem',
  background: '#00ffff',
  color: '#000',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default ContactForm;
