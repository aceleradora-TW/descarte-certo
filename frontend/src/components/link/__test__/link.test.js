import React from 'react';
import { render } from '@testing-library/react';
import Link from '../';

const getRegexValidation = (prop) => {
  const message = `Failed prop type: The prop \`${prop}\` is marked as required`;
  const regex = new RegExp(`(.*?)${message}(.*?)`);
  return { message, regex };
};

describe('Link', () => {
  const linkText = 'fake-link';
  const linkProps = {
    className: 'fake-class',
    href: 'http://fake-url.com',
    target: '_blank',
    rel: 'fake-rel'
  };
  let consoleError;

  beforeEach(() => {
    consoleError = jest.spyOn(console, 'error');
  });

  afterEach(() => {
    consoleError.mockRestore();
  });

  test('Should renders component when there is all required props', () => {
    const { container, getByText } = render(<Link {...linkProps}>{linkText}</Link>);

    expect(getByText(linkText)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Should renders component with warning when there is no children', () => {
    const { regex } = getRegexValidation('children');
    render(<Link {...linkProps} />);

    expect(consoleError).toHaveBeenCalledWith(expect.stringMatching(regex));
  });

  test('Should renders component with warning when there is no href', () => {
    const { regex } = getRegexValidation('href');
    const linkPropsWithoutHref = {...linkProps, href: null};
    render(<Link {...linkPropsWithoutHref}>{linkText}</Link>);

    expect(consoleError).toHaveBeenCalledWith(expect.stringMatching(regex));
  });

  test('Should renders component with warning when there is no target', () => {
    const { regex } = getRegexValidation('target');
    const linkPropsWithoutHref = {...linkProps, target: null};
    render(<Link {...linkPropsWithoutHref}>{linkText}</Link>);

    expect(consoleError).toHaveBeenCalledWith(expect.stringMatching(regex));
  });

  test('Should renders component with warning when there is no rel', () => {
    const { regex } = getRegexValidation('rel');
    const linkPropsWithoutHref = {...linkProps, rel: null};
    render(<Link {...linkPropsWithoutHref}>{linkText}</Link>);

    expect(consoleError).toHaveBeenCalledWith(expect.stringMatching(regex));
  });
});
