import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - MGRealtys Real Estate Consulting";
  }, []);

  return (
    <main className="page-container privacy-policy">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: January 2024</p>

      <section>
        <h2>Information Collection</h2>
        <p>MGRealtys collects personal information including name, email address, phone number, and property preferences when you use our contact forms, sign up for newsletters, or inquire about properties. We also collect usage data through cookies to improve your browsing experience.</p>
      </section>

      <section>
        <h2>How We Use Your Data</h2>
        <p>Your information is used to:</p>
        <ul>
          <li>Respond to your inquiries and provide real estate consulting services</li>
          <li>Send property recommendations and market updates</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>Cookies Policy</h2>
        <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.</p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>We may share data with trusted third parties including property developers, legal consultants, and analytics providers, strictly for service delivery and with appropriate data protection agreements.</p>
      </section>

      <section>
        <h2>Data Protection</h2>
        <p>We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information from unauthorized access.</p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at privacy@mgrealtys.com. We respond to all requests within 30 days.</p>
      </section>
    </main>
  );
}

export default PrivacyPolicy;