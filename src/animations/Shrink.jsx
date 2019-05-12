import React from 'react';
import BaseReactTransitionGroup from './BaseReactTransitionGroup';

/*
 * Shrink
 * Will shrink the contents of the Animated wrapper it is applied to.
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
      WebkitTransform: 'scale(1.5)',
      msTransform: 'scale(1.5)',
      transform: 'scale(1.5)',
      transformOrigin: 'center',
    }}
    transitionStyles={{
      entering: {
        WebkitTransform: 'scale(1)',
        msTransform: 'scale(1)',
        transform: 'scale(1)',
        opacity: 1,
      },
      entered: {
        WebkitTransform: 'scale(1)',
        msTransform: 'scale(1)',
        transform: 'scale(1)',
        opacity: 1,
      },
      exiting: {
        WebkitTransform: 'scale(1.5)',
        msTransform: 'scale(1.5)',
        transform: 'scale(1.5)',
        opacity: 0,
      },
      exited: {
        WebkitTransform: 'scale(1.5)',
        msTransform: 'scale(1.5)',
        transform: 'scale(1.5)',
        opacity: 0,
      },
    }}
  />
);
