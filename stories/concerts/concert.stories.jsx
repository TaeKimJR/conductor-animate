import React from 'react';
import { storiesOf } from '@storybook/react';
import Conductor from '../../src/Conductor';
import Animated from '../../src/Animated';
import { Fade, Slide } from '../../src/animations';
import Shape from '../helpers/Shape';
import palette from '../helpers/palette';

const animations = {
  Fade,
  Slide,
};

storiesOf('Concert', module)
  .add('Basic Fade', () => {
    const config = {
      First: {
        animation: 'Fade',
      },
      Second: {
        animation: 'Fade',
      },
      Third: {
        animation: 'Fade',
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <div style={{ display: 'flex', width: '100vw' }}>
          <Animated id="First">
            <Shape />
          </Animated>
          <Animated id="Second">
            <Shape color={palette.secondary} />
          </Animated>
          <Animated id="Third">
            <Shape color={palette.tertiary} />
          </Animated>
        </div>
      </Conductor>
    );
  })
  .add('Cascading Fade', () => {
    const config = {
      First: {
        animation: 'Fade',
        delay: 500,
      },
      Second: {
        animation: 'Fade',
        delay: 1000,
      },
      Third: {
        animation: 'Fade',
        delay: 1500,
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <div style={{ display: 'flex', width: '100vw' }}>
          <Animated id="First">
            <Shape />
          </Animated>
          <Animated id="Second">
            <Shape color={palette.secondary} />
          </Animated>
          <Animated id="Third">
            <Shape color={palette.tertiary} />
          </Animated>
        </div>
      </Conductor>
    );
  })
  .add('Stacked Fade', () => {
    const config = {
      First: {
        animation: 'Fade',
        delay: 500,
      },
      Second: {
        animation: 'Fade',
        delay: 1000,
      },
      Third: {
        animation: 'Fade',
        delay: 1500,
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <div style={{ display: 'flex', width: '100vw' }}>
          <Animated id="First">
            <Shape>
              <Animated id="Second">
                <Shape color={palette.secondary} size="175px">
                  <Animated id="Third">
                    <Shape color={palette.tertiary} size="100px" />
                  </Animated>
                </Shape>
              </Animated>
            </Shape>
          </Animated>
        </div>
      </Conductor>
    );
  })
  .add('2-step Fade', () => {
    const config = {
      First: {
        animation: 'Fade',
      },
      Second: {
        animation: 'Fade',
        delay: 1000,
      },
      Third: {
        animation: 'Fade',
        delay: 1000,
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <div style={{ display: 'flex', width: '100vw' }}>
          <Animated id="First">
            <Shape>
              <Animated id="Second">
                <Shape color={palette.secondary} size="125px" spacing="35px" />
              </Animated>
              <Animated id="Third">
                <Shape color={palette.tertiary} size="125px" spacing="35px" />
              </Animated>
            </Shape>
          </Animated>
        </div>
      </Conductor>
    );
  })
  .add('index-based Fade w/ delay', () => {
    const config = (_, { index }) => ({
      animation: 'Fade',
      delay: index * 500,
    });

    return (
      <Conductor config={config} animations={animations}>
        <div style={{ display: 'flex', width: '100vw' }}>
          {
            [1, 2, 3, 4, 5].map((_, index) => (
              <Animated id="First" additional={{ index }}>
                <Shape />
              </Animated>
            ))
          }
        </div>
      </Conductor>
    );
  })
  .add('Section Slide In', () => {
    const config = {
      First: {
        animation: 'Slide',
        delay: 0,
      },
      Second: {
        animation: 'Slide',
        delay: 500,
      },
      Third: {
        animation: 'Slide',
        delay: 1000,
      },
    };

    return (
      <Conductor config={config} animations={animations}>
        <div style={{ width: '100vw' }}>
          <Animated id="First">
            <Shape />
          </Animated>
          <Animated id="Second">
            <Shape color={palette.secondary} />
          </Animated>
          <Animated id="Third">
            <Shape color={palette.tertiary} />
          </Animated>
        </div>
      </Conductor>
    );
  });
