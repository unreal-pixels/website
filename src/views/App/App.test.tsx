import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '.';

test('renders main App', () => {
  // eslint-disable-next-line
  (window as any).AOS = {
    init: jest.fn(),
  };

  // eslint-disable-next-line
  (window as any).Typed = jest.fn().mockImplementation();

  const view = render(<Router><App /></Router>);
  expect(view).toBeTruthy();
});
