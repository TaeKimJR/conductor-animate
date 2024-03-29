import React from 'react';
import PropTypes from 'prop-types';
import { contextTypes, CONTEXT_KEY } from './Conductor';

const propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  additional: PropTypes.shape({}),
};

const defaultProps = {
  children: null,
  additional: {},
};

class Animated extends React.PureComponent {
  constructor(props, context) {
    super(props);

    const { id, additional } = props;


    const conductorContext = context[CONTEXT_KEY];

    // Validation Check
    if (process.env.NODE_ENV !== 'production') {
      if (!conductorContext) {
        throw new Error(`Unable to find a Conductor for Animated w/ ID of ${id}. Please ensure that all Animated's are wrapped in a Conductor.`);
      }
    }

    this.config = conductorContext.register(id, additional);
  }

  render() {
    const {
      children,
      id,
      additional,
      ...rest
    } = this.props;
    const { Wrapper, options } = this.config;
    return (
      <Wrapper {...rest} {...options}>
        {children}
      </Wrapper>
    );
  }
}

Animated.propTypes = propTypes;
Animated.defaultProps = defaultProps;
Animated.contextTypes = contextTypes;

export default Animated;
