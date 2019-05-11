import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

const defaultProps = {
  duration: 5000,
  delay: 0,
};

class FadeIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    const { delay } = this.props;
    // Hack to get the transition to run on mount
    setTimeout(() => {
      this.setState({
        mounted: true,
      });
    }, delay);
  }

  render() {
    const { children, duration } = this.props;
    const { mounted } = this.state;

    return (
      <Transition in={mounted} timeout={duration}>
        {state => (
          <div
            style={{
              // initial styles
              transition: `opacity ${duration}ms ease-in-out`,
              opacity: 0,
              // animated styles
              ...transitionStyles[state],
            }}
          >
            {children}
          </div>
        )}
      </Transition>
    );
  }
}

FadeIn.propTypes = propTypes;
FadeIn.defaultProps = defaultProps;

export default FadeIn;
