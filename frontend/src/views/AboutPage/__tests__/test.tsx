import { render } from '@testing-library/react';
import AboutPage from '../index';

test('renders correctly', () => {
  const component = render(<AboutPage />);
  expect(component).toMatchSnapshot();
});
