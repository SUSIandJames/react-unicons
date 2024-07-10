import React from 'react';
import PropTypes from 'prop-types';

const UilCalling = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.47,9a1,1,0,1,0-1-1A1,1,0,0,0,20.47,9Zm-3,0a1,1,0,1,0-1-1A1,1,0,0,0,17.47,9Zm-3,0a1,1,0,1,0-1-1A1,1,0,0,0,14.47,9ZM18.91,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.48,12.48,0,0,1-2.67-2,12.83,12.83,0,0,1-2-2.66L10,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.23-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-2.24,1,3,3,0,0,0-.73,2.39A19,19,0,0,0,18,21.91a2.56,2.56,0,0,0,.39,0,3,3,0,0,0,3-3v-3A3,3,0,0,0,18.91,13Zm.49,6a1,1,0,0,1-1.15,1,17.12,17.12,0,0,1-9.87-4.85A17.14,17.14,0,0,1,3.54,5.22a1,1,0,0,1,.25-.82,1,1,0,0,1,.74-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.56-.52l.63-1.4a13.69,13.69,0,0,0,1.58.46c.26.06.54.11.81.15a1,1,0,0,1,.78,1Z'
  }));
};

UilCalling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilCalling;