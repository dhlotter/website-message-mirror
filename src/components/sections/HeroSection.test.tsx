import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  it('renders the main heading and subheading', () => {
    render(<HeroSection />);
    
    expect(screen.getByRole('heading', { name: /Backup Texts and Calls Search Everything Never Lose 'Em/i })).toBeInTheDocument();
    expect(screen.getByText(/Securely back up all your messages, find any conversation instantly, and keep them forever./i)).toBeInTheDocument();
  });

  it('renders the Google Play button', () => {
    render(<HeroSection />);

    expect(screen.getByRole('link', { name: /Download MessageMirror on Google Play/i })).toBeInTheDocument();
  });
});
