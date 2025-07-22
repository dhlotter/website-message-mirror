import React from 'react'
import { AppStoreButtons } from './AppStoreButtons'

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500 opacity-10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600 bg-opacity-20 rounded-full mb-6">
              <span className="h-2 w-2 bg-blue-400 rounded-full mr-2"></span>
              <span className="text-sm font-medium text-blue-300">
                Never lose your conversations again
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Your Messages
              <br />
              <span className="text-blue-400">Backed Up Forever</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-xl mx-auto lg:mx-0">
              MessageMirror backs up your text messages to Gmail labels and call
              logs to Google Calendar, making them searchable and accessible
              forever.
            </p>
            <div className="mb-10">
              <AppStoreButtons />
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-gray-300">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-gray-900"
                    ></div>
                  ))}
                </div>
                <p className="text-sm">5,000+ Active Users</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm">4.8/5 Rating</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            {/* Phone mockup with app screenshot */}
            <div className="relative mx-auto max-w-xs">
              {/* Phone frame */}
              <div className="relative z-20 overflow-hidden rounded-[3rem] border-8 border-gray-800 bg-gray-800 shadow-xl">
                {/* Screen content */}
                <div className="aspect-[9/19] w-full overflow-hidden bg-white">
                  {/* App UI mockup */}
                  <div className="h-full bg-gradient-to-b from-gray-100 to-white">
                    {/* App header */}
                    <div className="bg-blue-600 text-white px-4 py-6">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="text-lg font-bold">MessageMirror</div>
                        <div className="h-6 w-6 rounded-full bg-white bg-opacity-20"></div>
                      </div>
                      <div className="flex items-center bg-white bg-opacity-10 rounded-full p-2">
                        <div className="h-4 w-4 rounded-full bg-white mr-2"></div>
                        <div className="text-sm">Search messages...</div>
                      </div>
                    </div>
                    {/* Message list */}
                    <div className="px-3 py-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="flex items-center p-3 mb-3 bg-white rounded-xl shadow-sm"
                        >
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex-shrink-0 mr-3"></div>
                          <div className="flex-1">
                            <div className="h-3 w-24 bg-gray-200 rounded-full mb-2"></div>
                            <div className="h-2 w-32 bg-gray-100 rounded-full"></div>
                          </div>
                          <div className="text-xs text-gray-400">
                            {i === 1 ? 'Now' : `${i}h`}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Notification badges */}
              <div className="absolute top-1/4 -right-12 bg-white text-gray-900 rounded-xl p-3 shadow-lg z-30 transform rotate-6">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium">Backup Complete</div>
                    <div className="text-xs text-gray-500">
                      1024 messages saved
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1/4 -left-12 bg-white text-gray-900 rounded-xl p-3 shadow-lg z-30 transform -rotate-3">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium">Easy Search</div>
                    <div className="text-xs text-gray-500">
                      Find any message
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[3.5rem] blur opacity-30 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
