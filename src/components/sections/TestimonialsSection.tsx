import React from 'react';
import Image from '../ui/Image';

// Note: In a real app, these would be actual user photos from your public/images/testimonials directory
// For now, we're using placeholder images from a placeholder service
const testimonials = [
  {
    id: 1,
    content:
      "I was devastated when I thought I'd lost years of precious conversations with my late mother. MessageMirror not only recovered them but made them searchable. It's like having a digital memory book.",
    author: 'Emily Rodriguez',
    role: 'Family Therapist',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: 'March 15, 2023',
    location: 'Austin, TX'
  },
  {
    id: 2,
    content:
      "As a real estate agent, I need to keep records of all client communications. MessageMirror's search feature saves me hours every week. I can instantly find any detail from past conversations.",
    author: 'James Wilson',
    role: 'Real Estate Agent',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: 'February 28, 2023',
    location: 'Miami, FL'
  },
  {
    id: 3,
    content:
      "The automatic backup gives me peace of mind, but the encrypted storage is what sold me. I know my private conversations stay private. Plus, the interface is so intuitive my parents can use it!",
    author: 'Priya Patel',
    role: 'Cybersecurity Expert',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    date: 'April 2, 2023',
    location: 'Seattle, WA'
  },
  {
    id: 4,
    content:
      "I run a small business and need to keep track of customer orders via text. MessageMirror's tagging system helps me organize conversations by project. It's been a total game-changer for my workflow.",
    author: 'Marcus Johnson',
    role: 'Small Business Owner',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
    date: 'January 12, 2023',
    location: 'Chicago, IL'
  },
  {
    id: 5,
    content:
      "As someone who's not very tech-savvy, I was worried about setting this up. But the step-by-step guide made it so easy! Now I have all my family group chats backed up and searchable.",
    author: 'Barbara Chen',
    role: 'Retired Teacher',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    date: 'March 28, 2023',
    location: 'Portland, OR'
  },
  {
    id: 6,
    content:
      "The cross-device sync works perfectly between my phone and laptop. I can search through years of messages in seconds. It's like having a photographic memory for every conversation.",
    author: 'David Kim',
    role: 'Freelance Journalist',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    date: 'February 5, 2023',
    location: 'New York, NY'
  }
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-600/20 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
            What Our <span className="text-blue-600 dark:text-blue-400">Users Say</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Join thousands of satisfied users who have secured their conversations with MessageMirror.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.rating}.0
                </span>
              </div>
              
              {/* Testimonial text */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-lg italic relative">
                <div className="absolute -top-2 -left-2 text-blue-100 dark:text-blue-900/50 text-5xl font-serif">"</div>
                <p className="relative z-10">{testimonial.content}</p>
                <div className="absolute -bottom-4 -right-2 text-blue-100 dark:text-blue-900/50 text-5xl font-serif">"</div>
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center mt-8 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-md">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.author}'s profile`}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900 dark:text-white">{testimonial.author}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{testimonial.role}</span>
                    <span className="mx-2">•</span>
                    <span>{testimonial.location}</span>
                  </div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Trusted by over 50,000+ users worldwide. Rated 4.8/5 based on 1,200+ reviews.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {['50K+', '4.8/5', '99.9%', '24/7', '5★'][i]}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {['Users', 'Rating', 'Uptime', 'Support', 'Reviews'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
