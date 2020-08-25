import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('renders Application', () => {
  test('With Valid route', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('With Invalid route', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/invalid-route"]}>
        <App />
      </MemoryRouter>
    );
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
