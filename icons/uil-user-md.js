import React from 'react';
import PropTypes from 'prop-types';

const UilUserMd = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'm15.899 13.229-.005-.002c-.063-.027-.124-.058-.188-.083A5.988 5.988 0 0 0 18 8.434a5.29 5.29 0 0 0-.045-.63.946.946 0 0 0 .038-.122l.281-2.397a3.006 3.006 0 0 0-2.442-3.302l-.79-.143a16.931 16.931 0 0 0-6.083 0l-.791.143a3.006 3.006 0 0 0-2.442 3.302l.28 2.397a.946.946 0 0 0 .039.122 5.29 5.29 0 0 0-.045.63 5.988 5.988 0 0 0 2.294 4.71c-.064.025-.125.056-.188.083l-.005.002a9.948 9.948 0 0 0-6.035 8.097 1 1 0 0 0 1.988.217 7.948 7.948 0 0 1 4.216-6.185l3.023 3.023a1 1 0 0 0 1.414 0l3.023-3.023a7.948 7.948 0 0 1 4.216 6.185 1 1 0 0 0 .992.892 1.048 1.048 0 0 0 .11-.006 1 1 0 0 0 .886-1.103 9.948 9.948 0 0 0-6.036-8.097ZM7.712 5.051a1.002 1.002 0 0 1 .814-1.1l.79-.143a14.93 14.93 0 0 1 5.368 0l.79.143a1.002 1.002 0 0 1 .814 1.1l-.178 1.514H7.89ZM12 16.261l-1.65-1.651a7.85 7.85 0 0 1 3.3 0Zm0-3.826a4.005 4.005 0 0 1-3.998-3.87h7.996A4.005 4.005 0 0 1 12 12.435Z'
  }));
};

UilUserMd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilUserMd;