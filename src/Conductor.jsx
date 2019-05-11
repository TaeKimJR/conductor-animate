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
 *   [animation: string]: ComponentType,
 * }
 *
 * "config" prop
 * The "config" prop defines how each Animated wrapper behaves. The "config" can be of two types, an
 * Object or a Function.
 *
 * The simplest usage would be an Object "config". It takes the shape of...
 * {
 *   [id: string]: {
 *     animation: string,
 *     [option: string]: any
 *   }
 * }
 *
 * For more advanced and complex usages you can use Function "config" that returns the config for
 * that given Animated wrapper's "id" and "additional". It takes the form of...
 * (id: string, additional: object) => ({
 *   animation: string,
 *   [option: string]: any
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

    // Validation Check
    if (process.env.NODE_ENV !== 'production') {
      if (!props.config) {
        throw new Error('You must define a "config" when rendering a Conductor.');
      }

      if (!props.animations) {
        throw new Error('You must define a valid "animations" mapping when rendering a Conductor.');
      }
    }

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

    const configuration = (typeof config === 'function') ? config(id, additional) : config[id];

    // Validation Check
    if (process.env.NODE_ENV !== 'production') {
      if (!configuration) {
        throw new Error(`Unable to find a valid configuration for Animated w/ ID of "${id}". Check your "config" and ensure it has defined an animation for this ID.`);
      }
    }

    const { animation, ...options } = configuration;
    const Wrapper = animations[animation];

    // Validation Check
    if (process.env.NODE_ENV !== 'production') {
      if (!Wrapper) {
        throw new Error(`Unable to find a valid Animation w/ name of "${animation}". Check your "animations" mapping and ensure it has defined an animation with this name.`);
      }
    }

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
