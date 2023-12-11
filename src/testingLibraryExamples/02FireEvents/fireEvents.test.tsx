import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../../components/Counter';

test('increments count when button is clicked', () => {
  render(<Counter />);
  const countElement = screen.getByText(/Count:/i);

  // Initial count
  expect(countElement).toHaveTextContent('Count: 0');

  // Fire click event on the button
  const incrementButton = screen.getByRole('button');
  fireEvent.click(incrementButton);

  // Count after click event
  expect(countElement).toHaveTextContent('Count: 1');
});
