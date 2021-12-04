import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title Create Post', () => {
  render(<App />);
  const linkElement = screen.getByText(/Create Post/i);
  expect(linkElement).toBeInTheDocument();
});
