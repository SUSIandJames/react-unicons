import React from 'react';
import PropTypes from 'prop-types';

const UilFolderNetwork = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,18H14.82A3,3,0,0,0,13,16.18V14h3.67A2.34,2.34,0,0,0,19,11.67V6.33A2.34,2.34,0,0,0,16.67,4h-4l-.13-.41A2.34,2.34,0,0,0,10.37,2h-3A2.34,2.34,0,0,0,5,4.33v7.34A2.34,2.34,0,0,0,7.33,14H11v2.18A3,3,0,0,0,9.18,18H3a1,1,0,0,0,0,2H9.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2ZM7.33,12A.33.33,0,0,1,7,11.67V4.33A.33.33,0,0,1,7.33,4h3a.33.33,0,0,1,.32.23l.36,1.09A1,1,0,0,0,12,6h4.67a.33.33,0,0,1,.33.33v5.34a.33.33,0,0,1-.33.33ZM12,20a1,1,0,1,1,1-1A1,1,0,0,1,12,20Z'
  }));
};

UilFolderNetwork.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilFolderNetwork;