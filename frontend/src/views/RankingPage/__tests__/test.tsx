import { render } from '@testing-library/react';
import RankingPage from '../index';

test('renders correctly', () => {
  const component = render(<RankingPage />);
  expect(component).toMatchSnapshot();
});
