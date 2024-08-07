import React from 'react';
import PropTypes from 'prop-types';

const UilBrightnessLow = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,11a1,1,0,1,0,1,1A1,1,0,0,0,3,11Zm1.93,6.66a1,1,0,1,0,1.41,0A1,1,0,0,0,4.93,17.66ZM6.34,6.34a1,1,0,1,0-1.41,0A1,1,0,0,0,6.34,6.34ZM12,4a1,1,0,1,0-1-1A1,1,0,0,0,12,4Zm5.66,13.66a1,1,0,1,0,1.41,0A1,1,0,0,0,17.66,17.66ZM21,11a1,1,0,1,0,1,1A1,1,0,0,0,21,11ZM17.66,4.93a1,1,0,1,0,1.41,0A1,1,0,0,0,17.66,4.93ZM12,20a1,1,0,1,0,1,1A1,1,0,0,0,12,20ZM12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z'
  }));
};

UilBrightnessLow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilBrightnessLow;