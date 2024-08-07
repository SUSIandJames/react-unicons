import React from 'react';
import PropTypes from 'prop-types';

const UilHipchat = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17.5 13.9c0-.2-.2-.4-.4-.4-.1 0-.2 0-.3.1-1.3 1.1-3 1.7-4.8 1.7-1.7 0-3.4-.6-4.8-1.7-.1-.1-.2-.1-.3-.1-.2 0-.4.2-.4.4s.1.3.2.5C8 16 10 16.9 12 16.8c2 .1 3.9-.8 5.2-2.4.2-.2.2-.3.3-.5zm2.7 6.9c-.8-.4-1.4-1.2-1.7-2-.1-.2 0-.3.1-.4 2.1-1.5 3.3-3.9 3.3-6.4 0-4.8-4.5-8.6-10-8.6s-10 3.9-10 8.6c0 4.8 4.5 8.6 10 8.6.7 0 1.4-.1 2.1-.2.1 0 .3 0 .4.1 1.6.9 3.4 1.5 5.2 1.5.4.1.7-.2.8-.6v-.1c.1-.2 0-.4-.2-.5zm-2.7-.8v.1c0 .1-.1.1-.1.1-1.1-.3-2-.8-2.9-1.5-.1-.1-.3-.1-.5-.1-.7.2-1.4.2-2.1.2-4.6 0-8.3-3.1-8.3-6.9C3.6 8.1 7.3 5 11.9 5c4.6 0 8.3 3.1 8.3 6.9-.1 2.3-1.4 4.4-3.4 5.5-.2.1-.3.3-.3.4.3.9.6 1.6 1 2.2z'
  }));
};

UilHipchat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilHipchat;