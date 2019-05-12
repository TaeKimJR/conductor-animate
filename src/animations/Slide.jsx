import React from 'react';
import BaseReactTransitionGroup from './BaseReactTransitionGroup';

/*
 * Slide
 * Will slide in the contents of the Animated wrapper it is applied to.
 *
 * This Animation can be configured with the following props...
 * - duration: how long the animation should take (ms)
 * - delay: how long the animation should wait until starting (ms)
 */
export default props => (
  <BaseReactTransitionGroup
    {...props}
    timingFunction="ease-in-out"
    transition="transform"
    initialStyles={{
      transform: 'translateX(100%)',
    }}
    transitionStyles={{
      entering: { transform: 'translateX(0)' },
      entered: { transform: 'translateX(0)' },
      exiting: { transform: 'translateX(100%)' },
      exited: { transform: 'translateX(100%)' },
    }}
  />
);
