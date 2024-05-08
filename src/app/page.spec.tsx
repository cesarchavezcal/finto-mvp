import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  beforeEach(async () => {
    // Action
    const Component = await Home();
    render(Component);
  });

  it('renders the heading', async () => {
    // Arrange
    const el = screen.queryByRole('heading');
    // Assert
    expect(el).toBeInTheDocument();
    expect(el).toMatchSnapshot();
  });

  it('heading should show "Hello World!"', async () => {
    // Arrange
    const el = screen.queryByRole('heading');
    // Assert
    expect(el).toHaveTextContent('Hello World');
    expect(el).toMatchSnapshot();
  });
});
