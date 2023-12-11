import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../../components/Title';

describe('Title', () => {
  test('renders example title', () => {
    render(<Title text="Some Long Title" />);
    const titleElement = screen.getByText('Some Long Title');

    expect(titleElement).toBeInTheDocument();

    // getByText - throws error if not found
    expect(screen.getByText(/title/i)).toBeInTheDocument();

    // queryByText - returns null if not found
    expect(screen.queryByText(/wrong text/i)).toBeNull();

    //selecting element by TestId. Element have to have attribute data-testid="title-text"
    expect(screen.getByTestId('title-text')).toBeInTheDocument();
  });
  test('renders example title (test async)', async () => {
    render(<Title text="Some Long Title" />);

    // findByText works asynchronously
    const titleElement = await screen.findByText(/some long title/i);

    expect(titleElement).toBeInTheDocument();
  });
});

//thank you, so now please create for me some example for " Advanced Topics" from your list
