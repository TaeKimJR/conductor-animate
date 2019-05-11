import React from 'react';
import PropTypes from 'prop-types';

export const CONTEXT_KEY = '_CONDUCTOR_';

const propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.shape({}).isRequired,
  animations: PropTypes.shape({}).isRequired,
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

  register(id) {
    const { config, animations } = this.props;
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
