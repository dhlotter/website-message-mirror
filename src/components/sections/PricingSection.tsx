import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Award } from 'lucide-react';
import { Button } from '../ui/Button';

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
};

const features = [
  'Unlimited message backup',
  'Search across all messages',
  'Advanced search filters',
  'Custom tags & labels',
  'Export to PDF',
  'Unlimited media storage',
  'Dedicated support',
  'Early access to new features',
  'Custom domain support',
  'API access',
];

const plans: Plan[] = [
  {
    name: 'Monthly',
    price: '$1',
    period: '/month',
    description: 'Flexible monthly plan.',
  },
  {
    name: 'Yearly',
    price: '$10',
    period: '/year',
    description: 'Save with an annual plan.',
  },
  {
    name: 'Lifetime',
    price: '$25',
    period: ' one-time payment',
    description: 'Pay once, own it forever.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as any, // Using 'as any' to bypass strict type checking for custom cubic bezier.
    },
  },
};

export const PricingSection = () => {

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-600/20 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
              Pricing
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
            Simple, <span className="text-blue-600 dark:text-blue-400">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Choose the plan that works best for you. Cancel or switch plans anytime.
          </p>
        </div>

        {/* Pricing Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default PricingSection;
