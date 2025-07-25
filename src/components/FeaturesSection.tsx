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
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Core{' '}
            <span className="text-blue-400">Features</span>
          </h2>
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
