import React from 'react';
import { string } from 'prop-types';
import './header.scss';
import Link from '../link';

const linkProps = {
  href: 'https://reactjs.org',
  target: '_blank',
  rel: 'noopener noreferrer',
  className: 'App-link'
};

const Header = ({ title }) => (
  <header className="App-header">
    {title}
    <Link {...linkProps}>Learn React</Link>
  </header>
);

Header.propTypes = {
  title: string.isRequired
};

export default Header;
