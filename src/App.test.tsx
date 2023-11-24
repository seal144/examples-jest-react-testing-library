import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders example title', () => {
  render(<App />);
  const titleElement = screen.getByText(/example/i);
  expect(titleElement).toBeInTheDocument();
});
