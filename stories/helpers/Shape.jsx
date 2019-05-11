import React from 'react';
import PropTypes from 'prop-types';
import palette from './palette';

const propTypes = {
  size: PropTypes.string,
  spacing: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
};
const defaultProps = {
  size: '250px',
  spacing: '50px',
  color: palette.primary,
  borderRadius: '16px',
};

const Shape = ({
  size,
  spacing,
  color,
  borderRadius,
  ...rest
}) => (
  <div
    style={{
      width: size, height: size, margin: spacing, background: color, borderRadius,
    }}
    {...rest}
  />
);

Shape.propTypes = propTypes;
Shape.defaultProps = defaultProps;

export default Shape;
