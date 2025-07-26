import React from 'react';
import googlePlayButton from '@/assets/images/google-play-button.svg';
import appStoreButton from '../assets/images/apple-appstore-button.svg';

export const AppStoreButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <a
        href="https://play.google.com/store/apps/details?id=com.messagemirror.app"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
        aria-label="Download MessageMirror on Google Play"
      >
        <img 
          src={googlePlayButton} 
          alt="" 
          role="presentation"
          className="h-12 w-auto object-contain"
          style={{ minWidth: '135px' }}
          width="135"
          height="40"
          loading="lazy"
        />
        <span className="sr-only">Download on Google Play</span>
      </a>
      {/* <a
        href="https://apps.apple.com/us/app/messagemirror/id123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:opacity-90 transition-opacity"
      >
        <img 
          src={appStoreButton} 
          alt="Download on the App Store" 
          className="h-12 w-auto object-contain"
          style={{ minWidth: '135px' }}
        />
      </a> */}
    </div>
  )
}
