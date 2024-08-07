import React from 'react';
import PropTypes from 'prop-types';

const UilMinusPath = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8.18,4h2.1a1,1,0,0,0,0-2H8.18a1,1,0,0,0,0,2ZM3,11.28a1,1,0,0,0,1-1V8.18a1,1,0,0,0-2,0v2.1A1,1,0,0,0,3,11.28ZM14.46,4a1,1,0,0,0,2,0V3a1,1,0,0,0-1-1h-1a1,1,0,0,0,0,2ZM21,7.54H16.46a1,1,0,1,0-2,0H8.54a1,1,0,0,0-1,1v5.92a1,1,0,1,0,0,2V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8.54A1,1,0,0,0,21,7.54ZM20,20H9.54V15.47h0V9.54H20ZM4,2H3A1,1,0,0,0,2,3V4A1,1,0,0,0,4,4,1,1,0,0,0,4,2ZM4,14.46a1,1,0,0,0-2,0v1a1,1,0,0,0,1,1H4a1,1,0,0,0,0-2Z'
  }));
};

UilMinusPath.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilMinusPath;