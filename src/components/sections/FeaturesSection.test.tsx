import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FeaturesSection } from './FeaturesSection';

// Create a mock component that will be used for all icons
const MockIcon = ({ className, testId }: { className?: string; testId: string }) => (
  <div className={className} data-testid={testId} />
);

// Mock the Icons components with our mock component
jest.mock('@/components/ui/Icons', () => ({
  __esModule: true,
  SearchIcon: (props: { className?: string }) => (
    <MockIcon className={props.className} testId="search-icon" />
  ),
  ShieldIcon: (props: { className?: string }) => (
    <MockIcon className={props.className} testId="shield-icon" />
  ),
  SyncIcon: (props: { className?: string }) => (
    <MockIcon className={props.className} testId="sync-icon" />
  ),
  ClockIcon: (props: { className?: string }) => (
    <MockIcon className={props.className} testId="clock-icon" />
  ),
}));

describe('FeaturesSection', () => {
  it('renders the main heading', () => {
    render(<FeaturesSection />);
    expect(screen.getByRole('heading', { name: /Core Features/i })).toBeInTheDocument();
  });

  it('renders all features with their titles, descriptions, and icons', () => {
    render(<FeaturesSection />);

    const features = [
      { 
        title: 'Powerful Search',
        description: "Find any message or call with Google's powerful search capabilities. No more endless scrolling through your text history.",
        iconTestId: 'search-icon'
      },
      {
        title: 'Secure Backup',
        description: 'Your messages are backed up securely to your own Gmail account. Only you have access to your data.',
        iconTestId: 'shield-icon'
      },
      {
        title: 'Automatic Sync',
        description: 'Set it and forget it. MessageMirror works silently in the background, keeping your backups current.',
        iconTestId: 'sync-icon'
      },
      {
        title: 'Never Lose History',
        description: 'Phone broken or lost? No problem. Your entire message and call history is safely preserved in Gmail.',
        iconTestId: 'clock-icon'
      }
    ];

    features.forEach(feature => {
      expect(screen.getByRole('heading', { name: feature.title })).toBeInTheDocument();
      expect(screen.getByText(feature.description)).toBeInTheDocument();
      expect(screen.getByTestId(feature.iconTestId)).toBeInTheDocument();
    });
  });
});
