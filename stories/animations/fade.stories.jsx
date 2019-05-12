import React from 'react';
import { storiesOf } from '@storybook/react';
import Fade from '../../src/animations/Fade';
import Shape from '../helpers/Shape';

storiesOf('Animations/Fade', module)
  .add('Fade', () => (
    <Fade>
      <Shape />
    </Fade>
  ))
  .add('Fade w/ Duration', () => (
    <Fade duration={5000}>
      <Shape />
    </Fade>
  ))
  .add('Fade w/ Delay', () => (
    <Fade delay={2000}>
      <Shape />
    </Fade>
  ));
