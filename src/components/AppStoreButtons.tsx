import React from 'react';
import googlePlayButton from '../assets/images/google-play-button.svg';
import appStoreButton from '../assets/images/apple-appstore-button.svg';

export const AppStoreButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-start">
      <a
        href="https://play.google.com/store/apps/details?id=com.messagemirror.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:opacity-90 transition-opacity"
      >
        <img 
          src={googlePlayButton} 
          alt="Get it on Google Play" 
          className="h-12 w-auto object-contain"
          style={{ minWidth: '135px' }}
        />
      </a>
      <a
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
      </a>
    </div>
  )
}
