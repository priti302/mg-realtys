import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the Mandate & Sole Selling premium section on the Home page', () => {
  render(
    <MemoryRouter initialEntries={['/home']}>
      <App />
    </MemoryRouter>
  );

  const sectionTitle = screen.getByText(/Mandate & Sole Selling/i);
  expect(sectionTitle).toBeInTheDocument();
});
