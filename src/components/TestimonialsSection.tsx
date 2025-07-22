import React from 'react'

const testimonials = [
  {
    id: 1,
    content:
      'MessageMirror saved me when I lost my phone. I was able to recover years of important text conversations from my Gmail account.',
    author: 'Alex Johnson',
    role: 'Marketing Director',
  },
  {
    id: 2,
    content:
      "Being able to search through my text messages with Google's search is a game-changer. I can find any conversation in seconds.",
    author: 'Samantha Lee',
    role: 'Small Business Owner',
  },
  {
    id: 3,
    content:
      'I was skeptical at first, but MessageMirror has become one of my essential apps. The peace of mind knowing my conversations are backed up is worth it.',
    author: 'Michael Chen',
    role: 'Software Engineer',
  },
]

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600 bg-opacity-20 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-400">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            What Our <span className="text-blue-400">Users Say</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Join thousands of satisfied users who have secured their
            conversations with MessageMirror.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 relative"
            >
              {/* Quote mark */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.17 6C6.4 7.23 4.5 9.66 4.5 13.5V16.5H10.5V10.5H7.5C7.5 9 8.07 7.94 9.17 7L9.17 6ZM16.17 6C13.4 7.23 11.5 9.66 11.5 13.5V16.5H17.5V10.5H14.5C14.5 9 15.07 7.94 16.17 7L16.17 6Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-center mb-4 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 text-lg">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
