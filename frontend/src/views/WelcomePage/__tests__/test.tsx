import { render } from '@testing-library/react';
import WelcomePage from '../index';

test('renders correctly', () => {
  const component = render(<WelcomePage />);
  expect(component).toMatchSnapshot();
});
