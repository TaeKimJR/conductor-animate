# Conductor
> Orchestrating complex page layout animations with a flick of your wrist.

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

Conductor is a React animation library that makes it easier to coordinate different animations
across your page layout from a single, simple configuration. You can also create your own custom
animations and inject them into the Conductor system.

Conductor is meant to make complex page layout animations simple and easy.

## Installation

npm:

```sh
npm install conductor
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
      <Animated id="HeaderSection">
        <h1>This Header will fade in</h1>
      </Animated>
    </Conductor>
  );
};

export default App;
```

## Documentation
### Conductor
A provider component that conducts all Animated wrappers within itself by providing directions on
how to animate. Be sure that your Conductor is placed at the top-level of your Application and
wraps all Animated wrappers.

#### "animations" prop
The "animations" prop is a mapping of animations that are used by the Conductor and live within the
given "config". Be sure to keep this map as narrowed down as possible to avoid bloat within your
application.

The "animations" prop takes the shape of...
```
{
  [animation: string]: ComponentType,
}
```
- `animation`: The animation name paired with the Animation component.

e.g.
```javascript
{
  Fade: Fade,
}
```

#### "config" prop
The "config" prop defines how each Animated wrapper behaves. The config can be of two types, an
Object or a Function.

For simple animations, use an object "config". For each Animate nested within the Conductor, you
will need to specify a configuration for each of their IDs. You will receive an error if you miss
one!

The "config" prop takes the shape of...
```
{
  [id: string]: {
    animation: string,
    [option: string]: any
  }
}
```
- `id`: The ID of a nested Animated. All Animated wrappers must have an associated config.
- `animation`: The name that maps directly to an animation in the "animations" mapping.
- `option`: Additional props that are passed to the Animation. You can define as many options as
needed.

e.g.
```javascript
{
  HeadingSection: {
    animation: 'Fade',
  },
  ContentSection: {
    animation: 'Fade',
    duration: 1000,
  },
  FooterSection: {
    animation: 'Fade',
    duration: 1000,
    delay: 500,
  },
}
```

For more advanced and complex usages you can use function "config". The function takes in the
Animated ID and additional data. It should then return the config for that given Animated wrapper.

The function takes the shape of...
```
(id: string, additional: object) => ({
  animation: string,
  [option: string]: any
})
```
- `id`: The ID of the Animated component.
- `additional`: Any additional information that can be passed to identify a specific Animated.
(e.g. index)
- `animation`: The name that maps directly to an animation in the "animations" mapping.
- `option`: Additional props that are passed to the Animation. You can define as many options as
needed.

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
   The first proper release
* 0.0.1
   Work in progress

## Meta

Tae Kim – [@taekimjr](https://github.com/TaeKimJR) – taekimjr@gmail.com

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


