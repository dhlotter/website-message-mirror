import React from 'react'
import { SearchIcon, ShieldIcon, SyncIcon, ClockIcon } from './Icons'

const features = [
  {
    id: 1,
    icon: <SearchIcon className="w-8 h-8 text-blue-500" />,
    title: 'Powerful Search',
    description:
      "Find any message or call with Google's powerful search capabilities. No more endless scrolling through your text history.",
  },
  {
    id: 2,
    icon: <ShieldIcon className="w-8 h-8 text-blue-500" />,
    title: 'Secure Backup',
    description:
      'Your messages are backed up securely to your own Gmail account. Only you have access to your data.',
  },
  {
    id: 3,
    icon: <SyncIcon className="w-8 h-8 text-blue-500" />,
    title: 'Automatic Sync',
    description:
      'Set it and forget it. MessageMirror works silently in the background, keeping your backups current.',
  },
  {
    id: 4,
    icon: <ClockIcon className="w-8 h-8 text-blue-500" />,
    title: 'Never Lose History',
    description:
      'Phone broken or lost? No problem. Your entire message and call history is safely preserved in Gmail.',
  },
]

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600 bg-opacity-20 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-400">
              Core Features
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Your Messages,{' '}
            <span className="text-blue-400">Backed Up Forever</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            MessageMirror seamlessly integrates with Gmail to preserve your
            conversations and make them searchable.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-blue-500/30 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500 bg-opacity-10 rounded-xl inline-block group-hover:bg-opacity-20 transition-all flex-shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
