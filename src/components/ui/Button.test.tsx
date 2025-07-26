import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button component', () => {
  test('renders button with children', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies the correct variant class', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const buttonElement = screen.getByText(/secondary/i);
    expect(buttonElement).toHaveClass('bg-gray-700');
  });

  test('is disabled when isLoading is true', () => {
    render(<Button isLoading>Loading</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });
});
