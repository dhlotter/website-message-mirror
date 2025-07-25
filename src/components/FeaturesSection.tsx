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
    <section id="features" className="py-28 bg-gradient-to-b from-gray-900 to-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full mb-6 transform transition-all hover:scale-105">
            <span className="text-sm font-medium text-blue-400 tracking-wider">
              CORE FEATURES
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6 leading-tight">
            Your Messages,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text">Backed Up Forever</span>
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            MessageMirror seamlessly integrates with Google to preserve your
            conversations and calls to make them searchable across all your devices.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300 flex-shrink-0">
                  {React.cloneElement(feature.icon, {
                    className: `${feature.icon.props.className} transition-transform group-hover:scale-110`
                  })}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-400/90 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
