import { render } from '@testing-library/react';
import App from '../App';

test('renders correctly', () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});
