import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RegistrationForm from '../../components/RegistrationForm';

describe('RegistrationForm', () => {
  test('submits the form with the provided values and test validation', () => {
    const mockSubmit = jest.fn();
    render(<RegistrationForm onSubmit={mockSubmit} />);

    // Submit the form without filling out fields (triggering validation)
    fireEvent.click(screen.getByText(/register/i));

    // Check if the validation error is displayed
    expect(screen.getByText(/please fill out both fields/i)).toBeInTheDocument();

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });

    // Submit the form
    fireEvent.click(screen.getByText(/register/i));

    // Check if the register function was called with the correct values
    expect(mockSubmit).toHaveBeenCalledWith({ username: 'testuser', password: 'testpassword' });
    // Check if the validation error is no longer displayed
    expect(screen.queryByText(/please fill out both fields/i)).toBeNull();
  });
});
