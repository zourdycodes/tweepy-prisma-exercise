import React from 'react';
import { TimelineTweet } from '.';
import { render, screen } from '@testing-library/react';

it('should render hello world', () => {
  render(<TimelineTweet />);
  const element = screen.getByText(/hello world/);
  expect(element).toBeInTheDocument();
});
