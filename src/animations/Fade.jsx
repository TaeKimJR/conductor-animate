import React from 'react';
import BaseReactTransitionGroup from './BaseReactTransitionGroup';


/*
 * Fade
 * Will fade in the contents of the Member it is applied to.
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
