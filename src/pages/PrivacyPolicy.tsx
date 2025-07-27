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
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Data Collection and Processing</h3>
        <p className="mb-4">
          The app processes the following types of data:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Messages:</strong> SMS and MMS content, including sender/recipient information, timestamps, and message content.</li>
          <li><strong>Gmail Email Labels:</strong> Used to organize backed-up messages into specific categories in your Gmail account.</li>
          <li><strong>Call Logs:</strong> Phone numbers, call duration, timestamps, and call type, stored as Google Calendar events when backup is enabled.</li>
          <li><strong>Device Identifiers:</strong> Used for app functionality and analytics.</li>
          <li><strong>Backup Operation Logs:</strong> Maintained on your device with timestamps, operation status, and item counts. Automatically deleted after 30 days.</li>
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
          Your data's security is our top priority. We implement the following measures:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>End-to-end encryption for all data in transit</li>
          <li>Local data storage with app sandboxing</li>
          <li>Automatic deletion of operation logs after 30 days</li>
          <li>No server-side storage of your personal data</li>
          <li>Data never leaves your device unless you explicitly enable backups</li>
          <li>When enabled, backups are encrypted in transit to Google's servers</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Your Data Rights</h2>
        <p className="mb-4">You have full control over your data:</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Access and Control</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>View and Manage Data:</strong> Access and manage your data through the app's interface</li>
          <li><strong>Modification:</strong> Edit or delete items before backup</li>
          <li><strong>Backup Control:</strong> Enable/disable backups at any time in the app settings</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Data Deletion</h3>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Local Data:</strong> Uninstalling the app will remove all locally stored data and logs from your device.</li>
          <li><strong>Backed-up Data:</strong> Data in your Google Account remains until you delete it:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access and delete messages in your Gmail account</li>
              <li>Remove call log events from your Google Calendar</li>
              <li>Manage your Google Account data at <a href="https://myaccount.google.com/data-and-privacy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">myaccount.google.com/data-and-privacy</a></li>
            </ul>
          </li>
          <li><strong>Backup Logs:</strong> Operation logs are automatically deleted after 30 days.</li>
        </ul>
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
          <strong>Email:</strong> <a href="mailto:support@easyentropy.com" className="text-blue-400 hover:underline">support@easyentropy.com</a>
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
