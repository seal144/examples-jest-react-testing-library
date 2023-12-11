import React, { useState } from 'react';

interface RegistrationFormProps {
  onSubmit: (registerData: { username: string; password: string }) => void;
}

const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (username && password) {
      setIsError(false);
      onSubmit({ username, password });
    } else {
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={handleUsernameChange} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} />

      {isError && <p style={{ color: 'red' }}>Please fill out both fields.</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
