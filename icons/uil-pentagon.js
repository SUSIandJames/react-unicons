import React from 'react';
import PropTypes from 'prop-types';

const UilPentagon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.59,9.17l-9-6.54a1,1,0,0,0-1.18,0l-9,6.54a1,1,0,0,0-.36,1.12L5.49,20.87a1,1,0,0,0,1,.69H17.56a1,1,0,0,0,1-.69L22,10.29A1,1,0,0,0,21.59,9.17ZM16.84,19.56H7.16l-3-9.2L12,4.68l7.82,5.68Z'
  }));
};

UilPentagon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilPentagon;