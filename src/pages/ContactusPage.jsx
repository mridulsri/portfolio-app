import React, { useRef, useState } from 'react';
import emailjs from '@vitejs/browser';

export default function ContactusPage() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // ⚠️ Replace with your Service ID
      'YOUR_TEMPLATE_ID',  // ⚠️ Replace with your Template ID
      form.current,
      'YOUR_PUBLIC_KEY'    // ⚠️ Replace with your Public Key
    )
    .then(() => {
        setStatus('Message sent successfully!');
        form.current.reset();
    })
    .catch((error) => {
        setStatus('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 transition-colors">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input type="text" name="user_name" required className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input type="email" name="user_email" required className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea name="message" required rows="4" className="w-full mt-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">{status}</p>}
    </div>
  );
}
