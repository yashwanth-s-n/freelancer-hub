import React from 'react';
import './HelpPage.css'; // Ensure CSS is applied

const HelpPage = () => {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I create an account?</h3>
          <p>To create an account, click on the "Sign Up" button at the top right and fill in the required information.</p>
        </div>
        <div className="faq-item">
          <h3>How do I post a job?</h3>
          <p>Once you're logged in, click on the "Post a Job" button on the dashboard and fill out the job details.</p>
        </div>
        <div className="faq-item">
          <h3>How can I contact customer support?</h3>
          <p>You can reach our customer support team by emailing support@freelancershub.com.</p>
        </div>
      </div>

      <div className="contact-section">
        <h2>Need More Help?</h2>
        <p>If you still have questions, feel free to reach out to our support team via email or phone:</p>
        <p>Email: support@freelancershub.com</p>
        <p>Phone: +1-800-123-4567</p>
      </div>
    </div>
  );
};

export default HelpPage;
