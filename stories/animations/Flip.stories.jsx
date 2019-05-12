import React from 'react';
import { storiesOf } from '@storybook/react';
import Flip from '../../src/animations/Flip';
import Shape from '../helpers/Shape';
import palette from '../helpers/palette';

storiesOf('Animations/Flip', module)
  .add('Flip', () => (
    <Flip>
      <Shape>
        <Shape size="100px" color={palette.secondary} />
      </Shape>
    </Flip>
  ))
  .add('Flip w/ Duration', () => (
    <Flip duration={5000}>
      <Shape>
        <Shape size="100px" color={palette.secondary} />
      </Shape>
    </Flip>
  ))
  .add('Flip w/ Delay', () => (
    <Flip delay={2000}>
      <Shape>
        <Shape size="100px" color={palette.secondary} />
      </Shape>
    </Flip>
  ));
