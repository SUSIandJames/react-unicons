import React from 'react';
import PropTypes from 'prop-types';

const UilVuejs = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18.03079,2.44284V2.44278l-.15448.00006-.84552-.00006-.00012.00024-2.64319.00055L12.01321,6.39951,9.62961,2.44357l-2.64594-.001-.00024-.00037H2.2717v.00055L.83231,2.44266,12.029,21.55777,23.16769,2.443ZM12.02505,17.59293,4.322,4.44223H7.14566l4.88562,8.4071,4.8468-8.4071h2.80939Z'
  }));
};

UilVuejs.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilVuejs;