import React from 'react';
import { storiesOf } from '@storybook/react';
import Conductor from '../src/Conductor';
import Animated from '../src/Animated';
import Fade from '../src/animations/Fade';

const animations = {
  Fade,
};

storiesOf('Fade', module)
  .add('Fade', () => {
    const config = {
      OnlyAnimated: {
        animation: 'Fade',
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <Animated id="OnlyAnimated">
          <div>
            Violins
          </div>
        </Animated>
      </Conductor>
    );
  })
  .add('Fade w/ Duration (long)', () => {
    const config = {
      OnlyAnimated: {
        animation: 'Fade',
        duration: 10000,
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <Animated id="OnlyAnimated">
          <div>
            Violins
          </div>
        </Animated>
      </Conductor>
    );
  })
  .add('Fade w/ Duration (short)', () => {
    const config = {
      OnlyAnimated: {
        animation: 'Fade',
        duration: 250,
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <Animated id="OnlyAnimated">
          <div>
            Violins
          </div>
        </Animated>
      </Conductor>
    );
  })
  .add('Fade w/ Delay', () => {
    const config = {
      OnlyAnimated: {
        animation: 'Fade',
        delay: 2000,
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <Animated id="OnlyAnimated">
          <div>
            Violins
          </div>
        </Animated>
      </Conductor>
    );
  })
  .add('Fade w/ function config', () => {
    const config = () => ({
      animation: 'Fade',
    });

    return (
      <Conductor config={config} animations={animations}>
        <Animated id="OnlyAnimated">
          <div>
            Violins
          </div>
        </Animated>
      </Conductor>
    );
  })
  .add('Fade x3', () => {
    const config = {
      FirstAnimated: {
        animation: 'Fade',
      },
      SecondAnimated: {
        animation: 'Fade',
      },
      ThirdAnimated: {
        animation: 'Fade',
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <Animated id="FirstAnimated">
          <div>
            Violins
          </div>
        </Animated>
        <Animated id="SecondAnimated">
          <div>
            Trumpets
          </div>
        </Animated>
        <Animated id="ThirdAnimated">
          <div>
            Flutes
          </div>
        </Animated>
      </Conductor>
    );
  })
  .add('Fade x3 (Complex)', () => {
    const config = {
      FirstAnimated: {
        animation: 'Fade',
        duration: 10000,
      },
      SecondAnimated: {
        animation: 'Fade',
        delay: 5000,
        duration: 5000,
      },
      ThirdAnimated: {
        animation: 'Fade',
        delay: 2000,
        duration: 8000,
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <Animated id="FirstAnimated">
          <div>
            Violins
          </div>
        </Animated>
        <Animated id="SecondAnimated">
          <div>
            Trumpets
          </div>
        </Animated>
        <Animated id="ThirdAnimated">
          <div>
            Flutes
          </div>
        </Animated>
      </Conductor>
    );
  });
