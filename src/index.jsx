import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const DURATION = 500;

const defaultStyle = {
  transition: `opacity ${DURATION}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

class Fade extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    mounted: false,
  };

  componentDidMount() {
    // Hack to get the transition to run on mount
    setTimeout(() => {
      this.setState({
        mounted: true,
      });
    })
  };

  render() {
    const { children } = this.props;
    const { mounted } = this.state;

    return (
      <Transition in={mounted} timeout={DURATION}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            {children}
          </div>
        )}
      </Transition>
    )
  }
}

export default Fade;
