import React from 'react';
import { storiesOf } from '@storybook/react';
import Conductor from '../src/Conductor';
import Member from '../src/Member';
import FadeIn from '../src/instruments/FadeIn';

const instruments = {
  FadeIn,
};

storiesOf('Fade In', module)
  .add('Fade In', () => {
    const score = {
      OnlyMember: {
        instrument: 'FadeIn',
      },
    };

    return (
      <Conductor score={score} instruments={instruments}>
        <Member id="OnlyMember">
          <div>
            Violins
          </div>
        </Member>
      </Conductor>
    );
  })
  .add('Fade In x3', () => {
    const score = {
      FirstMember: {
        instrument: 'FadeIn',
      },
      SecondMember: {
        instrument: 'FadeIn',
      },
      ThirdMember: {
        instrument: 'FadeIn',
      },
    };

    return (
      <Conductor score={score} instruments={instruments}>
        <Member id="FirstMember">
          <div>
            Violins
          </div>
        </Member>
        <Member id="SecondMember">
          <div>
            Trumpets
          </div>
        </Member>
        <Member id="ThirdMember">
          <div>
            Percussion
          </div>
        </Member>
      </Conductor>
    );
  })
  .add('Fade In w/ Duration (long)', () => {
    const score = {
      OnlyMember: {
        instrument: 'FadeIn',
        duration: 10000,
      },
    };

    return (
      <Conductor score={score} instruments={instruments}>
        <Member id="OnlyMember">
          <div>
            Violins
          </div>
        </Member>
      </Conductor>
    );
  })
  .add('Fade In w/ Duration (short)', () => {
    const score = {
      OnlyMember: {
        instrument: 'FadeIn',
        duration: 250,
      },
    };

    return (
      <Conductor score={score} instruments={instruments}>
        <Member id="OnlyMember">
          <div>
            Violins
          </div>
        </Member>
      </Conductor>
    );
  })
  .add('Fade In w/ Delay', () => {
    const score = {
      OnlyMember: {
        instrument: 'FadeIn',
        delay: 2000,
      },
    };

    return (
      <Conductor score={score} instruments={instruments}>
        <Member id="OnlyMember">
          <div>
            Violins
          </div>
        </Member>
      </Conductor>
    );
  });
