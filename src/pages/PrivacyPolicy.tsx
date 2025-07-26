import React from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 text-gray-200">
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-400">Last updated: {new Date().toISOString().split('T')[0]}</p>
    </div>

    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Welcome to MessageMirror. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy will inform you about how we look after your personal data when you use our app 
          and tell you about your privacy rights and how the law protects you.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Information We Process</h2>
        <p className="mb-4">
          MessageMirror processes your data exclusively on your device. We never collect, store, or access your information on our servers. When you enable backups, your data is securely encrypted and transferred directly from your device to your Google account—call logs to Google Calendar and messages to Gmail—without passing through our systems.
        </p>
        <p className="mb-4">
          The app processes the following types of data locally on your device:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Messages:</strong> SMS and MMS content, including sender/recipient information, timestamps, and message content.</li>
          <li><strong>Gmail Email Labels:</strong> Your Gmail labels are accessed to organize backed-up messages into specific categories or folders in your Gmail account.</li>
          <li><strong>Call Logs:</strong> Phone numbers, call duration, timestamps, and call type (incoming/outgoing/missed).</li>
          <li><strong>Google Calendar Data:</strong> Calendar names and events, including when you enable call log backup, which adds call details to your selected Google Calendar.</li>
          <li><strong>Backup Operation Logs:</strong> We maintain logs of backup operations on your device, including timestamps, operation status, and item counts processed. These logs help track the success or failure of backup operations, are stored locally on your device, and are automatically deleted after 30 days.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
        <p className="mb-4">Your data is used exclusively to provide the following services:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Enable backup and restore functionality for your messages and call logs</li>
          <li>Organize your backed-up messages using Gmail labels</li>
          <li>Create calendar events from your call logs when enabled</li>
          <li>Monitor and log backup operations for reliability and troubleshooting</li>
        </ul>
        <p className="mb-4">
          All processing occurs locally on your device. We do not access, collect, or store your data on our servers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          Your data's security is our top priority. Since all processing occurs on your device:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Your data never leaves your device unless you explicitly enable backups</li>
          <li>When backups are enabled, data is encrypted in transit to Google's servers</li>
          <li>We implement industry-standard security measures to protect data on your device</li>
          <li>Backup operation logs are automatically deleted after 30 days</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Your Data Rights</h2>
        <p className="mb-4">
          Since we don't collect or store your personal data on our servers, your primary rights include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>View and Manage Data:</strong> Access and manage your data directly through the app's interface</li>
          <li><strong>Stop Processing:</strong> Disable backup features at any time in the app settings</li>
          <li><strong>Delete Data:</strong> Remove the app to delete all locally stored data and operation logs</li>
          <li><strong>Google Account Controls:</strong> Manage your backed-up data through your Google Account settings</li>
        </ul>
        <p className="mb-4">
          For any requests regarding your data, please contact us at support@easyentropy.com
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any material changes by:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Updating the "Last updated" date at the top of this Privacy Policy</li>
          <li>Displaying a notice in the app for significant changes</li>
        </ul>
        <p className="mb-4">
          Your continued use of the app after any changes constitutes your acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          Email: support@easyentropy.com<br />
        </p>
      </section>
    </div>
    
    <div className="mt-12 pt-6 border-t border-gray-700">
      <Link to="/" className="text-blue-400 hover:underline">
        &larr; Back to Home
      </Link>
    </div>
  </div>
);
