import React from 'react';
import PropTypes from 'prop-types';

const UilSpinner = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M5.1 16c-.3-.5-.9-.6-1.4-.4-.5.3-.6.9-.4 1.4.3.5.9.6 1.4.4.5-.3.6-.9.4-1.4zm-.4-9.4c-.5-.2-1.1-.1-1.4.4-.2.5-.1 1.1.4 1.4.5.2 1.1.1 1.4-.4.2-.5.1-1.1-.4-1.4zm15.6 1.8c.5-.3.6-.9.4-1.4-.3-.5-.9-.6-1.4-.4-.5.3-.6.9-.4 1.4.3.5.9.6 1.4.4zM4 12c0-.6-.4-1-1-1s-1 .4-1 1 .4 1 1 1 1-.4 1-1zm3.2 6.8c-.5.1-.9.7-.7 1.2.1.5.7.9 1.2.7.5-.1.9-.7.7-1.2-.1-.5-.6-.8-1.2-.7zM21 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm-.7 4.6c-.5-.3-1.1-.1-1.4.4-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4.2-.5.1-1.1-.4-1.4zM17 3.3c-.5-.3-1.1-.1-1.4.4-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4.2-.5.1-1.1-.4-1.4zm-.2 15.5c-.5-.1-1.1.2-1.2.7-.1.5.2 1.1.7 1.2.5.1 1.1-.2 1.2-.7.1-.5-.2-1-.7-1.2zM12 20c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm0-18c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z'
  }));
};

UilSpinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilSpinner;