import { useState } from 'react';

export const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Submitting...');

    try {
      // The API endpoint will be on the same domain, under /api/subscribe
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        const data = await response.json();
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Subscribe to the Newsletter</h2>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div className="relative">
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-5 py-3 text-base text-white placeholder-gray-400 bg-gray-800 transition-all duration-200 border-2 border-gray-700 rounded-md focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Notify Me
          </button>
        </form>
        {message && <p className="mt-4 text-center text-gray-400">{message}</p>}
      </div>
    </section>
  );
};
