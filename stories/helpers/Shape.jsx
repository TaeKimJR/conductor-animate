import React from 'react';
import PropTypes from 'prop-types';
import palette from './palette';

const propTypes = {
  children: PropTypes.node,
  centerChildren: PropTypes.bool,
  size: PropTypes.string,
  spacing: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
};
const defaultProps = {
  children: null,
  centerChildren: true,
  size: '250px',
  spacing: '50px',
  color: palette.primary,
  borderRadius: '16px',
};

const Shape = ({
  children,
  centerChildren,
  size,
  spacing,
  color,
  borderRadius,
  ...rest
}) => (
  <div
    style={{
      width: size,
      height: size,
      margin: spacing,
      background: color,
      borderRadius,
      ...(centerChildren ? { display: 'flex', alignItems: 'center', justifyContent: 'center' } : {}),
    }}
    {...rest}
  >
    {children}
  </div>
);

Shape.propTypes = propTypes;
Shape.defaultProps = defaultProps;

export default Shape;
