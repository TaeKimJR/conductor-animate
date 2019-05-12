import React from 'react';
import { storiesOf } from '@storybook/react';
import FadedSlide from '../../src/animations/FadedSlide';
import Shape from '../helpers/Shape';

storiesOf('Animations/FadedSlide', module)
  .add('FadedSlide', () => (
    <FadedSlide>
      <Shape />
    </FadedSlide>
  ))
  .add('FadedSlide w/ Duration (long)', () => (
    <FadedSlide duration={10000}>
      <Shape />
    </FadedSlide>
  ))
  .add('FadedSlide w/ Duration (short)', () => (
    <FadedSlide duration={250}>
      <Shape />
    </FadedSlide>
  ))
  .add('FadedSlide w/ Delay', () => (
    <FadedSlide delay={2000}>
      <Shape />
    </FadedSlide>
  ));
