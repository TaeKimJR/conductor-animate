import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

/*
 * Base React Transition Group
 * Use this as a base for React Transition Group animations using the transition CSS property.
 * https://reactcommunity.org/react-transition-group/transition
 *
 * For clean animations, only animate position, scale, rotation, and opacity.
 *
 * You can extend this base by passing the following props (see Fade.jsx)
 * - timingFunction: how intermediate values are calculated during the animation (e.g. ease-in-out)
 * - transition: the CSS property or properties to animate (e.g. opacity)
 * - initialStyles: the styles to initially apply to the wrapper (e.g. { opacity: 0 })
 * - transitionStyles: the styles that are applied at each step of the animation (entering, entered,
 *   exiting, exited)
 *
 * Once extended, the Animation can be configured using these configurable prop
 * - duration: how long the animation should take (ms)
 * - delay: how long the animation should wait until starting (ms)
 */
const propTypes = {
  // Instrument Props
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,

  // Create Instrument Props
  timingFunction: PropTypes.string,
  transition: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  initialStyles: PropTypes.shape({}).isRequired,
  transitionStyles: PropTypes.shape({
    entering: PropTypes.object.isRequired,
    entered: PropTypes.object.isRequired,
    exiting: PropTypes.object.isRequired,
    exited: PropTypes.object.isRequired,
  }).isRequired,
};

const defaultProps = {
  timingFunction: 'ease-in-out',
  duration: 1500,
  delay: 0,
};

class BaseReactTransitionGroup extends React.PureComponent {
  constructor(props) {
    super(props);

    this.mountTimeout = null;

    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    const { delay } = this.props;
    // Hack to get the transition to run on mount
    this.mountTimout = setTimeout(() => {
      this.setState({
        mounted: true,
      });
    }, delay);
  }

  componentWillUnmount() {
    if (this.mountTimeout) {
      clearTimeout(this.mountTimeout());
    }
  }

  render() {
    const {
      children,
      timingFunction,
      transition,
      initialStyles,
      transitionStyles,
      duration,
    } = this.props;
    const { mounted } = this.state;

    // Allow for string (single transition) or array of strings (combination of transitions)
    const transitions = typeof transition === 'string' ? [transition] : transition;
    const transitionsStyle = transitions.reduce((acc, t, i) => (
      i === 0
        ? `${t} ${duration}ms ${timingFunction}`
        : `${acc}, ${t} ${duration}ms ${timingFunction}`
    ), '');

    return (
      <Transition in={mounted} timeout={duration}>
        {state => (
          <div
            style={{
              transition: transitionsStyle,
              ...initialStyles,
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

BaseReactTransitionGroup.propTypes = propTypes;
BaseReactTransitionGroup.defaultProps = defaultProps;

export default BaseReactTransitionGroup;
