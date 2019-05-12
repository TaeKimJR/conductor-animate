import React from 'react';
import { storiesOf } from '@storybook/react';
import Shrink from '../../src/animations/Shrink';
import Shape from '../helpers/Shape';

storiesOf('Animations/Shrink', module)
  .add('Shrink', () => (
    <Shrink>
      <Shape />
    </Shrink>
  ))
  .add('Shrink w/ Duration', () => (
    <Shrink duration={5000}>
      <Shape />
    </Shrink>
  ))
  .add('Shrink w/ Delay', () => (
    <Shrink delay={2000}>
      <Shape />
    </Shrink>
  ));
