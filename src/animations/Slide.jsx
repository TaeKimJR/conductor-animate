import React from 'react';
import BaseReactTransitionGroup from './BaseReactTransitionGroup';

/*
 * Slide
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
      WebkitTransform: 'translateX(200px)',
      msTransform: 'translateX(200px)',
      transform: 'translateX(200px)',
    }}
    transitionStyles={{
      entering: {
        WebkitTransform: 'translateX(0)',
        msTransform: 'translateX(0)',
        transform: 'translateX(0)',
        opacity: 1,
      },
      entered: {
        WebkitTransform: 'translateX(0)',
        msTransform: 'translateX(0)',
        transform: 'translateX(0)',
        opacity: 1,
      },
      exiting: {
        WebkitTransform: 'translateX(200px)',
        msTransform: 'translateX(200px)',
        transform: 'translateX(200px)',
        opacity: 0,
      },
      exited: {
        WebkitTransform: 'translateX(200px)',
        msTransform: 'translateX(200px)',
        transform: 'translateX(200px)',
        opacity: 0,
      },
    }}
  />
);
