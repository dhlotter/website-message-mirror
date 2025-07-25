import React from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 text-gray-200">
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
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
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p className="mb-4">We may collect, use, store, and transfer different kinds of personal data about you:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Account Data:</strong> Email address, username, and password.</li>
          <li><strong>Message Data:</strong> Messages and media that you send or receive through our service.</li>
          <li><strong>Technical Data:</strong> IP address, login data, browser type and version, time zone setting, and location.</li>
          <li><strong>Usage Data:</strong> Information about how you use our app and services.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
        <p className="mb-4">We will only use your personal data when the law allows us to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Provide and maintain our service</li>
          <li>Notify you about changes to our service</li>
          <li>Allow you to participate in interactive features</li>
          <li>Provide customer support</li>
          <li>Gather analysis or valuable information to improve our service</li>
          <li>Monitor the usage of our service</li>
          <li>Detect, prevent, and address technical issues</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p className="mb-4">
          We have implemented appropriate security measures to prevent your personal data from being accidentally lost, 
          used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to 
          those employees, agents, contractors, and other third parties who have a business need to know.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Your Legal Rights</h2>
        <p className="mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Right to withdraw consent</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
          on this page and updating the "Last updated" date at the top of this Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          Email: support@easyentropy.com
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
