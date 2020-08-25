import React from 'react';
import { string, element, oneOfType } from 'prop-types';
import './link.scss';

const Link = ({ children, ...props }) => (
  <a {...props}>
    {children}
  </a>
);

Link.propTypes = {
  children: oneOfType([element, string]).isRequired,
  className: string,
  href: string.isRequired,
  target: string.isRequired,
  rel: string.isRequired
};

export default Link;
