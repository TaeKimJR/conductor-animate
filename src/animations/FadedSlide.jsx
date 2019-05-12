import React from 'react';
import BaseReactTransitionGroup from './BaseReactTransitionGroup';

/*
 * Faded Slide
 * Will slide + fade in the contents of the Animated wrapper it is applied to.
 *
 * This Animation can be configured with the following props...
 * - duration: how long the animation should take (ms)
 * - delay: how long the animation should wait until starting (ms)
 */
export default props => (
  <BaseReactTransitionGroup
    {...props}
    timingFunction="ease-in-out"
    transition={['transform', 'opacity']}
    initialStyles={{
      opacity: 0,
      transform: 'translateX(200px)',
    }}
    transitionStyles={{
      entering: { transform: 'translateX(0)', opacity: 1 },
      entered: { transform: 'translateX(0)', opacity: 1 },
      exiting: { transform: 'translateX(200px)', opacity: 0 },
      exited: { transform: 'translateX(200px)', opacity: 0 },
    }}
  />
);
