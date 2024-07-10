import React from 'react';
import PropTypes from 'prop-types';

const UilDesktopAltSlash = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71l1,1A3,3,0,0,0,3,6v8a3,3,0,0,0,3,3H9v2H6a1,1,0,0,0,0,2H18a1,1,0,0,0,.93-.66l1.36,1.37a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM5,6.41,9.59,11H5ZM13,19H11V17h2ZM6,15a1,1,0,0,1-1-1V13h6.59l2,2Zm9,4V17h.59l2,2ZM9.66,5H18a1,1,0,0,1,1,1v5H17.66a1,1,0,0,0,0,2H19v1a.37.37,0,0,1,0,.11,1,1,0,0,0,.78,1.18l.2,0a1,1,0,0,0,1-.8A2.84,2.84,0,0,0,21,14V6a3,3,0,0,0-3-3H9.66a1,1,0,0,0,0,2Z'
  }));
};

UilDesktopAltSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilDesktopAltSlash;