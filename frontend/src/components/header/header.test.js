import React from 'react';
import { render } from '@testing-library/react';
import Header from './';

describe('Header', () => {
  test('Should renders component when there is title', () => {
    const headerProps = {
      title: 'fake-title'
    };
    const { container, getByText } = render(<Header {...headerProps} />);
    expect(getByText(headerProps.title)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should renders component with warning when there is no title', () => {
    const message = 'Failed prop type: The prop `title` is marked as required';
    const regex = new RegExp(`(.*?)${message}(.*?)`);
    const consoleError = jest.spyOn(console, 'error');
    const headerProps = {};
    const { container } = render(<Header {...headerProps} />);
    expect(consoleError).toHaveBeenCalledWith(expect.stringMatching(regex));
    expect(container).toMatchSnapshot();
    consoleError.mockRestore();
  });
});
