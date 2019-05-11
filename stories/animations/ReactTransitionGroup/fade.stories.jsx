import React from 'react';
import { storiesOf } from '@storybook/react';
import Fade from '../../../src/animations/Fade';
import Shape from '../../helpers/Shape';
import palette from '../../helpers/palette';

const animations = {
  Fade,
};

storiesOf('Fade', module)
  .add('Fade', () => (
    <Fade>
      <Shape />
    </Fade>
  ))
  .add('Fade w/ Duration (long)', () => (
    <Fade duration={10000}>
      <Shape />
    </Fade>
  ))
  .add('Fade w/ Duration (short)', () => (
    <Fade duration={250}>
      <Shape />
    </Fade>
  ))
  .add('Fade w/ Delay', () => (
    <Fade delay={2000}>
      <Shape />
    </Fade>
  ));
