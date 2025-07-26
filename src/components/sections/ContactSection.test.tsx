import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactSection } from './ContactSection';

// Use fake timers to control setTimeout
jest.useFakeTimers();

describe('ContactSection', () => {

  it('renders the contact form', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^message$/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    render(<ContactSection />);
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText('Name must be at least 2 characters.')).toBeInTheDocument();
    expect(await screen.findByText('Please enter a valid email address.')).toBeInTheDocument();
    expect(await screen.findByText('Message must be at least 10 characters.')).toBeInTheDocument();
  });

  it('submits the form successfully with valid data', async () => {
    render(<ContactSection />);

    fireEvent.input(screen.getByLabelText(/^name$/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/^email$/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.input(screen.getByLabelText(/^message$/i), { target: { value: 'This is a test message that is long enough.' } });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Check for loading state
    expect(await screen.findByRole('button', { name: /sending.../i })).toBeInTheDocument();

    // Fast-forward time by 1 second to simulate the API call
    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    // Check for success message
    expect(await screen.findByText('Thank you for your message!')).toBeInTheDocument();
  });
});
