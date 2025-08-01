import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "Is MessageMirror secure?",
    answer:
      "Yes, your data is completely secure. We use end-to-end encryption and never store your messages on our servers. Everything is backed up directly to your own Google accounts.",
  },
  {
    id: 2,
    question: "Will this use a lot of data?",
    answer:
      "MessageMirror is designed to be efficient with data usage. In the settings, you can choose to only back up when connected to WiFi if you prefer, and it intelligently syncs only new messages after the initial backup.",
  },
  {
    id: 3,
    question: "Can I search through my backed up messages?",
    answer:
      "Absolutely! Once your messages are backed up to Gmail, you can use Gmail's powerful search features to find any message by keyword, contact, or date.",
  },
  {
    id: 4,
    question: "Will MessageMirror slow down my phone?",
    answer:
      "MessageMirror runs in the background using Android's best practices to ensure minimal impact on your phone's performance. You can disable automatic backups if you prefer, which allows you to back up your messages and call logs on demand whenever you choose.",
  },
  {
    id: 5,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no penalties. Your backed up data will remain in your Google accounts even after cancellation.",
  },
]

export const FAQSection = () => {
  const [openId, setOpenId] = useState(1)

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? 0 : id)
  }

  return (
    <section id="faq" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Frequently <span className="text-blue-400">Asked</span> Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-700 rounded-xl overflow-hidden bg-gray-900 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center">
                <button
                  className="flex-1 text-left px-6 py-4 focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>
                </button>
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${openId === faq.id ? 'bg-blue-500' : 'bg-gray-700'} transition-colors`}
                  aria-label={openId === faq.id ? 'Collapse answer' : 'Expand answer'}
                >
                  {openId === faq.id ? (
                    <ChevronUp className="w-4 h-4 text-white" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>
              {openId === faq.id && (
                <div className="px-6 py-4 border-t border-gray-700">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
