import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'Is MessageMirror secure?',
    answer:
      'Yes, MessageMirror uses OAuth to securely connect to your Gmail account. We never store your messages on our servers - everything is backed up directly to your own Gmail account where only you have access.',
  },
  {
    id: 2,
    question: 'Will this use a lot of data?',
    answer:
      'MessageMirror is designed to be efficient with data usage. In the settings, you can choose to only back up when connected to WiFi if you prefer, and it intelligently syncs only new messages after the initial backup.',
  },
  {
    id: 3,
    question: 'How do I find my backed up messages?',
    answer:
      "You have full control over where your data is stored. You can choose both the Gmail label for your text messages and the Google Calendar for your call logs in the app's settings. This allows you to organize your backups exactly how you want them.",
  },
  {
    id: 4,
    question: 'Will MessageMirror slow down my phone?',
    answer:
      "MessageMirror runs in the background using Android's best practices to ensure minimal impact on your phone's performance. You can disable automatic backups if you prefer, which allows you to back up your messages and call logs on demand whenever you choose.",
  },
  {
    id: 5,
    question: 'Can I back up media like photos and videos?',
    answer:
      'Currently, MessageMirror focuses on backing up text content from messages and call log information. Media attachments are not included in the backup at this time.',
  },
]

export const FAQSection = () => {
  const [openId, setOpenId] = useState(1)

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? 0 : id)
  }

  return (
    <section id="faq" className="py-24 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600 bg-opacity-20 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-400">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Everything you need to know about MessageMirror.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-700 rounded-xl overflow-hidden bg-gray-900 hover:border-blue-500/30 transition-colors"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${openId === faq.id ? 'bg-blue-500' : 'bg-gray-700'} transition-colors`}
                >
                  {openId === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>
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
