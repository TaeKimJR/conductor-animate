import React from 'react';
import BaseReactTransitionGroup from './BaseReactTransitionGroup';

/*
 * Fade
 * Will fade in the contents of the Animated wrapper it is applied to.
 *
 * This Animation can be configured with the following props...
 * - duration: how long the animation should take (ms)
 * - delay: how long the animation should wait until starting (ms)
 */
export default props => (
  <BaseReactTransitionGroup
    {...props}
    timingFunction="ease-in-out"
    transition="opacity"
    initialStyles={{
      opacity: 0,
    }}
    transitionStyles={{
      entering: { opacity: 1 },
      entered: { opacity: 1 },
      exiting: { opacity: 0 },
      exited: { opacity: 0 },
    }}
  />
);
