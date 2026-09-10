import React from 'react';
import './WhatsAppChannelButton.css';

const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029VaDDMO83bbUubrloea3S';

function WhatsAppChannelButton() {
  return (
    <a
      className="whatsapp-channel-button"
      href={WHATSAPP_CHANNEL_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow us on WhatsApp Channel"
    >
      <span className="whatsapp-channel-button__icon" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="img" focusable="false">
          <path
            d="M16 2C8.3 2 2 8.1 2 15.7c0 2.8.9 5.4 2.5 7.6L3.4 29l6-1.6c2.1 1.1 4.4 1.7 6.8 1.7h.1c7.7 0 14-6.1 14-13.7S23.7 2 16 2zm0 24.1c-2 0-4-.6-5.7-1.6l-.4-.2-3.6 1 1-3.5-.3-.4a12.2 12.2 0 0 1-1.7-6.1C4.4 9.7 9.7 5 16 5s11.6 4.7 11.6 10.7S22.3 26.1 16 26.1zm7.4-8.9c-.4-.2-2.3-1.1-2.7-1.2s-.6-.2-.9.2-.9 1.2-1.2 1.4-.4.3-.8.1-1.6-.6-3.1-1.8c-1.2-1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7s-.9-2.2-1.2-3c-.3-.7-.6-.6-.9-.6h-.8c-.2 0-.6.1-.9.5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.8c.2.3 2.7 4.2 6.9 5.4.9.4 1.6.7 2.2.9.9.3 1.8.3 2.5.2.8-.1 2.3-.9 2.7-1.8.4-.9.4-1.7.3-1.8-.1-.1-.4-.2-.8-.4-.4-.2-2.3-1.1-2.7-1.2z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="whatsapp-channel-button__text">Follow Us on WhatsApp</span>
    </a>
  );
}

export default WhatsAppChannelButton;
