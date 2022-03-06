import { render } from '@testing-library/react';
import ComparisonPage from '../index';

test('renders correctly', () => {
  const component = render(<ComparisonPage />);
  expect(component).toMatchSnapshot();
});
