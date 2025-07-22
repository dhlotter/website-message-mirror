import React from 'react';
import { Link } from 'react-router-dom';

export const TermsOfService = () => (
  <div className="max-w-4xl mx-auto px-4 py-12 text-gray-200">
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
    </div>

    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using the MessageMirror application ("Service"), you agree to be bound by these Terms of Service 
          ("Terms"). If you disagree with any part of the terms, then you may not access the Service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
        <p className="mb-4">
          MessageMirror provides a platform for users to back up and manage their messages across various messaging platforms. 
          The Service may include features to store, retrieve, and manage message data.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <p className="mb-2">When you create an account with us, you must provide accurate and complete information.</p>
        <p className="mb-2">You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>
        <p>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
        <p className="mb-2">You agree not to use the Service to:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Upload or distribute any content that is illegal, harmful, or violates any laws</li>
          <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
          <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
          <li>Attempt to gain unauthorized access to any portion of the Service or any other systems or networks</li>
          <li>Use the Service for any illegal or unauthorized purpose</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
        <p className="mb-4">
          The Service and its original content, features, and functionality are and will remain the exclusive property of 
          MessageMirror and its licensors. The Service is protected by copyright, trademark, and other laws of both the 
          United States and foreign countries.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
        <p className="mb-4">
          In no event shall MessageMirror, nor its directors, employees, partners, agents, suppliers, or affiliates, 
          be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
          loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
          inability to access or use the Service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
        <p className="mb-4">
          We may terminate or suspend your account and bar access to the Service immediately, without prior notice or 
          liability, under our sole discretion, for any reason whatsoever and without limitation, including but not 
          limited to a breach of the Terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of California, United States, without 
          regard to its conflict of law provisions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide 
          notice of any changes by posting the new Terms on this page and updating the "Last updated" date at the top of 
          these Terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms, please contact us at:
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
