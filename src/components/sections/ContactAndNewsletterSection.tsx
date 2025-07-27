import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

// Form validation schemas
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const newsletterFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;
type NewsletterFormInputs = z.infer<typeof newsletterFormSchema>;

export const ContactAndNewsletterSection: React.FC = () => {
  // Contact form state and handlers
  const [contactSubmitting, setContactSubmitting] = React.useState(false);
  const [contactStatus, setContactStatus] = React.useState<'success' | 'error' | null>(null);
  
  const { 
    register: registerContact, 
    handleSubmit: handleContactSubmit, 
    formState: { errors: contactErrors },
    reset: resetContactForm
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onContactSubmit = async (values: ContactFormInputs) => {
    setContactSubmitting(true);
    setContactStatus(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Contact form submitted:', values);
      setContactStatus('success');
      resetContactForm();
    } catch (error) {
      console.error('Contact submission failed:', error);
      setContactStatus('error');
    } finally {
      setContactSubmitting(false);
    }
  };

  // Newsletter form state and handlers
  const [newsletterSubmitting, setNewsletterSubmitting] = React.useState(false);
  const [newsletterStatus, setNewsletterStatus] = React.useState<'success' | 'error' | null>(null);
  
  const { 
    register: registerNewsletter, 
    handleSubmit: handleNewsletterSubmit,
    formState: { errors: newsletterErrors },
    reset: resetNewsletterForm
  } = useForm<NewsletterFormInputs>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onNewsletterSubmit = async (values: NewsletterFormInputs) => {
    setNewsletterSubmitting(true);
    setNewsletterStatus(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Newsletter form submitted:', values);
      setNewsletterStatus('success');
      resetNewsletterForm();
    } catch (error) {
      console.error('Newsletter submission failed:', error);
      setNewsletterStatus('error');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Section - Left Side */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-8 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6 text-center">
              Get <span className="text-blue-400">In</span> Touch
            </h2>
            <p className="text-gray-300 mb-8 text-center">
              Have a question or feedback? We'd love to hear from you.
            </p>
            
            <form onSubmit={handleContactSubmit(onContactSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...registerContact('name')}
                />
                {contactErrors.name && (
                  <p className="mt-1 text-sm text-red-400">{contactErrors.name.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...registerContact('email')}
                />
                {contactErrors.email && (
                  <p className="mt-1 text-sm text-red-400">{contactErrors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...registerContact('message')}
                />
                {contactErrors.message && (
                  <p className="mt-1 text-sm text-red-400">{contactErrors.message.message}</p>
                )}
              </div>
              
              <div>
                <Button
                  type="submit"
                  disabled={contactSubmitting}
                  className="w-full"
                >
                  {contactSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
              
              {contactStatus === 'success' && (
                <p className="text-green-400 mt-2">Your message has been sent successfully!</p>
              )}
              
              {contactStatus === 'error' && (
                <p className="text-red-400 mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
          
          {/* Newsletter Section - Right Side */}
          <motion.div 
            className="bg-gray-800 rounded-xl p-8 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6 text-center">
              Subscribe <span className="text-blue-400">to</span> Our <span className="text-blue-400">Newsletter</span>
            </h2>
            <p className="text-gray-300 mb-8 text-center">
              Stay updated with our latest features, updates, and announcements.
            </p>
            
            <form onSubmit={handleNewsletterSubmit(onNewsletterSubmit)} className="space-y-6">
              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  id="newsletter-email"
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...registerNewsletter('email')}
                />
                {newsletterErrors.email && (
                  <p className="mt-1 text-sm text-red-400">{newsletterErrors.email.message}</p>
                )}
              </div>
              
              <div>
                <Button
                  type="submit"
                  disabled={newsletterSubmitting}
                  className="w-full"
                >
                  {newsletterSubmitting ? 'Sending...' : 'Subscribe'}
                </Button>
              </div>
              
              {newsletterStatus === 'success' && (
                <p className="text-green-400 mt-2">Your subscription has been received successfully!</p>
              )}
              
              {newsletterStatus === 'error' && (
                <p className="text-red-400 mt-2">Failed to send subscription. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndNewsletterSection;
