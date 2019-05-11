import React from 'react';
import { shallow } from 'enzyme';
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
