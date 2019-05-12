import React from 'react';
import { storiesOf } from '@storybook/react';
import Slide from '../../src/animations/Slide';
import Shape from '../helpers/Shape';

storiesOf('Animations/Slide', module)
  .add('Slide', () => (
    <Slide>
      <Shape />
    </Slide>
  ))
  .add('Slide w/ Duration (long)', () => (
    <Slide duration={10000}>
      <Shape />
    </Slide>
  ))
  .add('Slide w/ Duration (short)', () => (
    <Slide duration={250}>
      <Shape />
    </Slide>
  ))
  .add('Slide w/ Delay', () => (
    <Slide delay={2000}>
      <Shape />
    </Slide>
  ));
