import React from 'react';
import PropTypes from 'prop-types';

export const CONTEXT_KEY = '_CONDUCTOR_';

const propTypes = {
  children: PropTypes.node.isRequired,
  score: PropTypes.shape({}).isRequired,
  instruments: PropTypes.shape({}).isRequired,
};

export const contextTypes = {
  [CONTEXT_KEY]: PropTypes.shape({
    register: PropTypes.func,
  }),
};

class Conductor extends React.Component {
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
    const { score, instruments } = this.props;
    const { instrument, ...options } = score[id];
    const Wrapper = instruments[instrument];

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
