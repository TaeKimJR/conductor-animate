import React from 'react';
import { storiesOf } from '@storybook/react';
import Conductor from '../src/Conductor';
import Animated from '../src/Animated';
import Fade from '../src/animations/Fade';
import Shape from './helpers/Shape';
import palette from './helpers/palette';

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
          <Shape />
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
          <Shape />
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
          <Shape />
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
          <Shape />
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
          <Shape />
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
        <div style={{ display: 'flex', width: '100vw' }}>
          <Animated id="FirstAnimated">
            <Shape />
          </Animated>
          <Animated id="SecondAnimated">
            <Shape color={palette.secondary} />
          </Animated>
          <Animated id="ThirdAnimated">
            <Shape color={palette.tertiary} />
          </Animated>
        </div>
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
        <div style={{ display: 'flex', width: '100vw' }}>
          <Animated id="FirstAnimated">
            <Shape />
          </Animated>
          <Animated id="SecondAnimated">
            <Shape color={palette.secondary} />
          </Animated>
          <Animated id="ThirdAnimated">
            <Shape color={palette.tertiary} />
          </Animated>
        </div>
      </Conductor>
    );
  })
  .add('Fade x3 (Cascading)', () => {
    const config = {
      FirstAnimated: {
        animation: 'Fade',
        delay: 500,
        duration: 5000,
      },
      SecondAnimated: {
        animation: 'Fade',
        delay: 1000,
        duration: 5000,
      },
      ThirdAnimated: {
        animation: 'Fade',
        delay: 1500,
        duration: 5000,
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <div style={{ display: 'flex', width: '100vw' }}>
          <Animated id="FirstAnimated">
            <Shape />
          </Animated>
          <Animated id="SecondAnimated">
            <Shape color={palette.tertiary} />
          </Animated>
          <Animated id="ThirdAnimated">
            <Shape color={palette.secondary} />
          </Animated>
        </div>
      </Conductor>
    );
  });
