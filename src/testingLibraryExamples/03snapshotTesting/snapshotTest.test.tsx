import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../../components/Counter';

test('matches snapshot after incrementing count', () => {
  const { asFragment } = render(<Counter />);

  const incrementButton = screen.getByRole('button');

  // Initial render
  expect(asFragment()).toMatchSnapshot();

  // Fire click event on the button
  fireEvent.click(incrementButton);

  // Snapshot after click event
  expect(asFragment()).toMatchSnapshot();
});
