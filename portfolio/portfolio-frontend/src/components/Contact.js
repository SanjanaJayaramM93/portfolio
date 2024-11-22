import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import axios
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // For success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset status
    setStatus('');

    try {
      // Send the form data to the backend using Axios
      const response = await axios.post('http://localhost:5000/send-email', formData);

      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        }); // Clear form data after sending
      }
    } catch (error) {
      setStatus('Failed to send the message. Please try again.');
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>Feel free to contact me with any inquiries, questions, or suggestions. I’ll be happy to assist you!</p>

      <div className="contact-page">
        {/* Left half with animated text */}
        <motion.div
          className="animated-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <h3>Say hello with 😊</h3>
        </motion.div>

        {/* Vertical line separator */}
        <div className="separator"></div>

        {/* Right half with the contact form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
            />

            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>

          {/* Displaying status message */}
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;






