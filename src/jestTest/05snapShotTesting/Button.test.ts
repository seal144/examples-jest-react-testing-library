import { render } from '@testing-library/react';
import Button from './Button';

//this test on first run creates snapshot and in some later runs compares if anything has changed.
test('Button snapshot', () => {
  const { asFragment } = render(Button({ label: 'Click me' }));
  expect(asFragment()).toMatchSnapshot();
});
