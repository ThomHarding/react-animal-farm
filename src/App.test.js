import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('You have been my friend. That in itself is a tremendous thing.');
  expect(linkElement).toBeInTheDocument();
});
