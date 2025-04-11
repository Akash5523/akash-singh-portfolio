import React from 'react';

const ContactForm = () => (
  <footer>
    <form id="contact-form">
      <h3>Contact Me</h3>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </footer>
);

export default ContactForm;