import React from 'react';
import PropTypes from 'prop-types';

const UilKeyboardHide = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M6.71,10.29a1.15,1.15,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.3-1.3A1,1,0,0,0,6.71,10.29ZM9.29,7.71A1,1,0,0,0,10,8a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76,1.15,1.15,0,0,0-.21-.33,1,1,0,0,0-1.42,0,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76A1.15,1.15,0,0,0,9.29,7.71ZM6.71,6.29A1,1,0,0,0,5,7a1,1,0,0,0,.08.38,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,6,8a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,6.71,6.29Zm6.58,12L12,19.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Zm5.42-12A1,1,0,0,0,17,7a.84.84,0,0,0,.08.38,1.15,1.15,0,0,0,.21.33,1,1,0,0,0,1.42,0,1.15,1.15,0,0,0,.21-.33A.84.84,0,0,0,19,7a1,1,0,0,0-.08-.38A1.15,1.15,0,0,0,18.71,6.29ZM14,10H10a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm6-8H4A3,3,0,0,0,1,5v8a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V5A3,3,0,0,0,20,2Zm1,11a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4H20a1,1,0,0,1,1,1Zm-2.29-2.71a1,1,0,0,0-.33-.21.92.92,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21A1.05,1.05,0,0,0,17,11a1,1,0,1,0,1.92-.38A1,1,0,0,0,18.71,10.29ZM13.62,6.08a1.15,1.15,0,0,0-.33.21A1.05,1.05,0,0,0,13,7a1,1,0,0,0,.08.38,1.15,1.15,0,0,0,.21.33A1,1,0,0,0,14,8a.84.84,0,0,0,.38-.08,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33A.84.84,0,0,0,15,7a1.05,1.05,0,0,0-.29-.71A1,1,0,0,0,13.62,6.08Z'
  }));
};

UilKeyboardHide.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilKeyboardHide;