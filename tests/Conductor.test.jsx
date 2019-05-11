import React from 'react';
import { shallow } from 'enzyme';
import Conductor from '../src/Conductor';
import Fade from '../src/animations/Fade';

const animations = { Fade };

const config = {
  Section1: {
    animation: 'Fade',
  },
};

test('renders', () => {
  const wrapper = shallow(
    <Conductor animations={animations} config={config}>
      <div>Hello World</div>
    </Conductor>,
  );
  expect(wrapper).toBeDefined();
});
