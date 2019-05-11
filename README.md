# Conductor
> Orchestrating complex page layout animations with a flick of your wrist.

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

Conductor is a React animation library that makes it easier to coordinate different animations
across your page layout from a single, simple configuration. You can also create your own custom
animations and inject them into the Conductor system.

Conductor is meant to make complex, page layout animations simple and easy.

![](header.png)

## Installation

npm:

```sh
npm install conductor --save
```

yarn:

```sh
yarn add conductor
```

## Basic Usage
```javascript
import React from 'react';
import { Conductor, Animated, Fade } from 'conductor';

// Define the Animation mapping
const animations = { Fade };

// Define the configuration
const config = {
  "HeaderSection": {
    animation: 'Fade',
    duration: 500,
    delay: 200,
  },
};

const App = () => {
  // Render the Page w/ the Conductor and Animated Section
  return (
    <Conductor animations={animations} config={config}>
      <div class="page">
        <Animated id="HeaderSection">
          <h1>This Header will fade in</h1>
        </Animated>
      </div>
    </Conductor>
  );
};

export default App;
```

## Documentation
### Conductor
// TODO

#### "animations" prop
// TODO

#### "config" prop
// TODO

### Animated
// TODO

#### "id" prop
// TODO

#### "additional" prop
// TODO

### Animations
// TODO

#### Creating your own Animation
// TODO

## Release History
* 1.0.0
    * The first proper release
* 0.0.1
    * Work in progress

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/TaeKimJR/conductor/blob/master/LICENSE](https://github.com/TaeKimJR/conductor/blob/master/LICENSE)

## Contributing

1. Fork it (<https://github.com/TaeKimJR/conductor/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square


