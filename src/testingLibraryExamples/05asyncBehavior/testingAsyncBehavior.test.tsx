import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import ShowBtcPrice from '../../components/ShowBtcPrice';
import { getAverageBtcPrice } from '../../api/getAverageBtcPrice';

// Mocking getAverageBtcPrice
jest.mock('../../api/getAverageBtcPrice');

describe('ShowBtcPrice Component', () => {
  const mockedGetAverageBtcPrice = getAverageBtcPrice as jest.Mock;

  beforeEach(() => {
    // Reset the mock implementation before each test
    mockedGetAverageBtcPrice.mockReset();
  });

  test('renders loading message initially', () => {
    render(<ShowBtcPrice currency="pln" />);
    expect(screen.getByText(/loading data/i)).toBeInTheDocument();
  });

  test('renders BTC price after fetching', async () => {
    mockedGetAverageBtcPrice.mockResolvedValueOnce(150000);

    render(<ShowBtcPrice currency="pln" />);

    // Wait for the component to render BTC price
    await waitFor(() => {
      expect(screen.getByText(/btc-pln/i)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/150000/i)).toBeInTheDocument();
    });

    // Check if getAverageBtcPrice was called with the correct parameter
    expect(mockedGetAverageBtcPrice).toHaveBeenCalledWith('pln');
  });

  test('renders error message after fetching fails', async () => {
    mockedGetAverageBtcPrice.mockResolvedValueOnce(null);

    render(<ShowBtcPrice currency="pln" />);

    // Wait for the component to render error message
    await waitFor(() => {
      expect(screen.getByText(/error: failed to fetch data/i)).toBeInTheDocument();
    });
  });
});
