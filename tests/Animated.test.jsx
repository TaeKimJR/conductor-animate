import React from 'react';
import { mount, shallow } from 'enzyme';
import Conductor from '../src/Conductor';
import Animated from '../src/Animated';
import Fade from '../src/animations/Fade';

const animations = { Fade };

const config = {
  Header: {
    animation: 'Fade',
  },
};

test('renders', () => {
  const wrapper = shallow(
    <Conductor animations={animations} config={config}>
      <Animated id="Header">
        <div>Hello World</div>
      </Animated>
    </Conductor>,
  );
  expect(wrapper).toBeDefined();
});

test('renders with "additional" prop', () => {
  const wrapper = shallow(
    <Conductor animations={animations} config={config}>
      <Animated id="Header" additional={{ index: 0 }}>
        <div>Hello World</div>
      </Animated>
    </Conductor>,
  );
  expect(wrapper).toBeDefined();
});

test('throws an error when not wrapped in a Conductor', () => {
  expect(() => mount(
    <Animated id="Header">
      <div>Hello World</div>
    </Animated>,
  )).toThrow();
});
