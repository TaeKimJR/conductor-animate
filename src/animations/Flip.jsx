import React from 'react';
import BaseReactTransitionGroup from './BaseReactTransitionGroup';

/*
 * Flip
 * Will rotate in the contents of the Animated wrapper it is applied to.
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
      transformOrigin: 'center',
      WebkitTransform: 'rotate3d(1, 0, 0, 90deg)',
      msTransform: 'rotate3d(1, 0, 0, 90deg)',
      transform: 'rotate3d(1, 0, 0, 90deg)',
    }}
    transitionStyles={{
      entering: {
        opacity: 1,
        WebkitTransform: 'rotate3d(0, 0, 0, 0)',
        msTransform: 'rotate3d(0, 0, 0, 0)',
        transform: 'rotate3d(0, 0, 0, 0)',
      },
      entered: {
        opacity: 1,
        WebkitTransform: 'rotate3d(0, 0, 0, 0)',
        msTransform: 'rotate3d(0, 0, 0, 0)',
        transform: 'rotate3d(0, 0, 0, 0)',
      },
      exiting: {
        opacity: 0,
        WebkitTransform: 'rotate3d(1, 0, 0, 90deg)',
        msTransform: 'rotate3d(1, 0, 0, 90deg)',
        transform: 'rotate3d(1, 0, 0, 90deg)',
      },
      exited: {
        opacity: 0,
        WebkitTransform: 'rotate3d(1, 0, 0, 90deg)',
        msTransform: 'rotate3d(1, 0, 0, 90deg)',
        transform: 'rotate3d(1, 0, 0, 90deg)',
      },
    }}
  />
);
