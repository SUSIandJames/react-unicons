import React from 'react';
import PropTypes from 'prop-types';

const UilMapPin = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16.37,12.79a1,1,0,0,0-.74,1.86C17.09,15.23,18,16.13,18,17c0,1.42-2.46,3-6,3s-6-1.58-6-3c0-.87.91-1.77,2.37-2.35a1,1,0,0,0-.74-1.86C5.36,13.69,4,15.26,4,17c0,2.8,3.51,5,8,5s8-2.2,8-5C20,15.26,18.64,13.69,16.37,12.79ZM11,9.86V17a1,1,0,0,0,2,0V9.86a4,4,0,1,0-2,0ZM12,4a2,2,0,1,1-2,2A2,2,0,0,1,12,4Z'
  }));
};

UilMapPin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilMapPin;