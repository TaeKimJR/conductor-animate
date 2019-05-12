import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    name: 'Conductor',
    url: 'https://github.com/TaeKimJR/conductor-animate',
    showAddonPanel: false,
  },
});

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.jsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
