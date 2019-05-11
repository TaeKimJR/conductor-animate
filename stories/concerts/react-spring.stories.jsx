import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { Spring, config as springConfig } from 'react-spring/renderprops';
import Conductor from '../../src/Conductor';
import Animated from '../../src/Animated';

import Shape from '../helpers/Shape';
import palette from '../helpers/palette';

// Example of react-spring animation
const Fade = ({ children, ...rest }) => (
  <Spring
    {...rest}
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    config={springConfig.molasses}
  >
    {styles => <div style={styles}>{children}</div>}
  </Spring>
);
Fade.propTypes = {
  children: PropTypes.node.isRequired,
};

const animations = {
  Fade,
};

storiesOf('Third Party Concerts/react-spring', module)
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
  });
