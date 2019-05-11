import React from 'react';
import PropTypes from 'prop-types';
import { contextTypes, CONTEXT_KEY } from './Conductor';

/*
 * Animated
 * A wrapper that will apply an animation to its inner contents. It will receive directions from
 * the Conductor on how to animate based on its ID.
 *
 * Each Animated wrapper must be provided an "id" prop to be identified by the Conductor.
 *
 * If the "config" prop passed to the Conductor is a function, you can pass additional information
 * about an Animated wrapper through the "additional" prop. The config function can use this
 * information to make more specific decisions on how it should animate.
 */

const propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  additional: PropTypes.shape({}),
};

const defaultProps = {
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
    const { children } = this.props;
    const { Wrapper, options } = this.config;
    return (
      <Wrapper {...options}>
        {children}
      </Wrapper>
    );
  }
}

Animated.propTypes = propTypes;
Animated.defaultProps = defaultProps;
Animated.contextTypes = contextTypes;

export default Animated;
