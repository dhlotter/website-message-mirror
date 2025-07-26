import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PricingSection } from './PricingSection';

describe('PricingSection', () => {
  it('renders the pricing section with all plans', () => {
    render(<PricingSection />);

    // Check for the main heading
    expect(screen.getByRole('heading', { name: /Simple, Transparent Pricing/i })).toBeInTheDocument();

    // Check for each plan's name
    expect(screen.getByRole('heading', { name: /Monthly/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Yearly/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Lifetime/i })).toBeInTheDocument();

    // Check for prices
    expect(screen.getByText('$1')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('$25')).toBeInTheDocument();

    
  });
});
