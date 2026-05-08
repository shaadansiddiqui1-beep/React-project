import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo dashboard heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1, name: /your personal todo dashboard/i });
  expect(headingElement).toBeInTheDocument();
});
