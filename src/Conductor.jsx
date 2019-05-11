import React from 'react';
import PropTypes from 'prop-types';

/* Conductor
 * Conducts all Animated wrappers within itself by providing directions on how to animate. Be sure
 * that your Conductor is placed at the top-level of your Application and wraps all Animated
 * wrappers.
 *
 * "animations" prop
 * The "animations" prop is a mapping of animations that are used by the Conductor and live within
 * the given "config". Be sure to keep this map as narrowed down as possible to avoid bloat within
 * your application.
 *
 * The "animations" prop takes the shape of...
 * {
 *   [animation name]: <ElementType>,
 * }
 *
 * "config" prop
 * The "config" prop defines how each Animated wrapper behaves. The "config" can be of two types, an
 * Object or a Function.
 *
 * The simplest usage would be an Object "config". It takes the shape of...
 * {
 *   [id]: {
 *     animation: <string>,
 *     delay: <number>,
 *     duration: <number>,
 *   }
 * }
 *
 * The more advanced usage would be a Function "config". It takes the form of...
 * (id, additional) => ({
 *   Wrapper: <ElementType>,
 *   options: <Object>
 * })
 *
 */

export const CONTEXT_KEY = '_CONDUCTOR_';

const propTypes = {
  children: PropTypes.node.isRequired,
  animations: PropTypes.shape({}).isRequired,
  config: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func]).isRequired,
};

export const contextTypes = {
  [CONTEXT_KEY]: PropTypes.shape({
    register: PropTypes.func,
  }),
};

class Conductor extends React.PureComponent {
  constructor(props) {
    super(props);

    this.register = this.register.bind(this);
  }

  getChildContext() {
    return {
      [CONTEXT_KEY]: {
        register: this.register,
      },
    };
  }

  register(id, additional) {
    const { config, animations } = this.props;

    // Config can be a function that returns the configuration for that given Animated wrapper
    if (typeof config === 'function') {
      return config(id, additional);
    }

    const { animation, ...options } = config[id];
    const Wrapper = animations[animation];

    return {
      Wrapper,
      options,
    };
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

Conductor.propTypes = propTypes;
Conductor.childContextTypes = contextTypes;

export default Conductor;
