import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, CloudUpload, Search, Lock, Smartphone, Mail, Zap } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Easy Setup',
    description: 'Download the app and sign in with your Google account. No technical knowledge required.',
    icon: <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    features: [
      'Simple 3-minute setup',
      'No credit card required',
      'Works with any Android device'
    ]
  },
  {
    id: 2,
    title: 'Automatic Backup',
    description: 'Your messages are automatically backed up to your Google Drive in real-time.',
    icon: <CloudUpload className="w-8 h-8 text-green-600 dark:text-green-400" />,
    features: [
      'Real-time sync',
      'End-to-end encrypted',
      'Unlimited message history'
    ]
  },
  {
    id: 3,
    title: 'Search & Organize',
    description: 'Quickly find any message, photo, or file with powerful search and filtering options.',
    icon: <Search className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    features: [
      'Search by keyword, date, or sender',
      'Filter by media type',
      'Create custom tags'
    ]
  }
];

const features = [
  {
    name: 'Cross-Platform Access',
    description: 'Access your messages from any device with a web browser.',
    icon: Smartphone
  },
  {
    name: 'Secure Storage',
    description: 'Your data is encrypted and stored securely in your Google Drive.',
    icon: Lock
  },
  {
    name: 'Email Notifications',
    description: 'Get weekly digests of your most important conversations.',
    icon: Mail
  },
  {
    name: 'Lightning Fast',
    description: 'Search through years of messages in milliseconds.',
    icon: Zap
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-600/20 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
            Get Started in <span className="text-blue-600 dark:text-blue-400">Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            MessageMirror makes it simple to back up, search, and organize your messages.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Stay Organized
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              MessageMirror offers powerful features to help you keep track of your important conversations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.name}
                  className="flex items-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  transition={{ delay: 0.1 + (index * 0.05) }}
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                      {feature.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already backing up and organizing their messages with MessageMirror.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Download Now
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-400 dark:bg-blue-900/30 dark:hover:bg-blue-800/30 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
