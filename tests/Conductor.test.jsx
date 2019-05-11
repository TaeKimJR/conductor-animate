import React from 'react';
import { mount, shallow } from 'enzyme';
import Conductor from '../src/Conductor';
import Animated from '../src/Animated';
import Fade from '../src/animations/Fade';

const animations = { Fade };

const config = {
  HeadingSection: {
    animation: 'Fade',
  },
  NoValidAnimation: {
    animation: 'DOES_NOT_EXIST',
  },
};

const fConfig = (id) => {
  if (id === 'HeadingSection') {
    return {
      Wrapper: Fade,
      options: {},
    };
  }

  return false;
};

test('renders', () => {
  const wrapper = shallow(
    <Conductor animations={animations} config={config}>
      <div>Hello World</div>
    </Conductor>,
  );
  expect(wrapper).toBeDefined();
});

test('renders w/ a function config', () => {
  const wrapper = shallow(
    <Conductor animations={animations} config={fConfig}>
      <div>Hello World</div>
    </Conductor>,
  );
  expect(wrapper).toBeDefined();
});

test('renders w/ an Animated', () => {
  const wrapper = mount(
    <Conductor animations={animations} config={config}>
      <Animated id="HeadingSection">
        <div>Hello World</div>
      </Animated>
    </Conductor>,
  );
  expect(wrapper).toBeDefined();
});

test('renders children', () => {
  const wrapper = shallow(
    <Conductor animations={animations} config={config}>
      <div>Hello World</div>
    </Conductor>,
  );
  expect(wrapper.prop('children')).toEqual('Hello World');
});

test('throws an error when a config is not provided', () => {
  expect(() => shallow(
    <Conductor animations={animations}>
      <div>Hello World</div>
    </Conductor>,
  )).toThrow();
});

test('throws an error when an animations mapping is not provided', () => {
  expect(() => shallow(
    <Conductor config={config}>
      <div>Hello World</div>
    </Conductor>,
  )).toThrow();
});

test('throws an error when an Animated is defined but it does not have a corresponding config', () => {
  expect(() => mount(
    <Conductor config={config} animations={animations}>
      <Animated id="DOES_NOT_EXIST">
        <div>Hello World</div>
      </Animated>
    </Conductor>,
  )).toThrow();
});

test('throws an error when an Animated is defined but it has an invalid animation', () => {
  expect(() => mount(
    <Conductor config={config} animations={animations}>
      <Animated id="NoValidAnimation">
        <div>Hello World</div>
      </Animated>
    </Conductor>,
  )).toThrow();
});

test('throws an error when an Animated is defined but a function config does not return a result', () => {
  expect(() => mount(
    <Conductor config={fConfig} animations={animations}>
      <Animated id="DOES_NOT_EXIST">
        <div>Hello World</div>
      </Animated>
    </Conductor>,
  )).toThrow();
});
