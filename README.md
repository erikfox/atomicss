# Atomicss  <sup><sub><sub>&nbsp;&nbsp;/ *uh*-**tom**'-iks /</sub></sub></sup>

[<img src="https://img.shields.io/twitter/follow/erkfox.svg?style=social&label=Say%20hello!" align="right" alt="Twitter @erkfox" />](https://twitter.com/erkfox)

[![license](https://img.shields.io/github/license/erikfox/atomicss.svg)](https://opensource.org/licenses/Apache-2.0)
[![npm](https://img.shields.io/npm/v/atomicss.svg)](https://www.npmjs.com/package/atomicss)
[![CircleCI](https://img.shields.io/circleci/project/github/erikfox/atomicss.svg?colorB=32CD32)](https://circleci.com/gh/erikfox/atomicss/tree/master)
[![Coveralls](https://img.shields.io/coveralls/erikfox/atomicss.svg?colorB=32CD32)](https://coveralls.io/github/erikfox/atomicss)

![WARNING! EARLY DEVELOPMENT!](https://img.shields.io/badge/⚠️-EARLY_DEVELOPMENT-F5B814.svg)

A composable library of atomic, functional CSS-in-JS styles.

### Install
```bash
$ npm install --save atomicss
```

### Include
```js
import atoms from 'atomicss';

/* OR */

import { margin } from 'atomicss';
```

## Usage

### React's [inline styles](https://facebook.github.io/react/docs/dom-elements.html#style)
```js
import { display } from 'atomicss';

const shyDiv = ({ hidden }) => (
  <div
    style={Object.assign({},
      hidden ? display.block : display.none,
    )}
  >
    I am shy!
  </div>
);
```

## Principles

### Composability
Atomicss strongly believes in [composition over inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA). It's more useful to be able to ***describe exactly what you need*** than having to extend and/or make exceptions for pre-defined, opinionated classes.

```js
const SubmitButton = ({ validInput }) => (
  <button
    style={Object.assign({},
      textAlign.center,
      margin.medium,
      validInput ? backgroundColor.green : backgroundColor.red,
    )}
  >
    Submit
  </button>
);
```

### Functional Programming
Composability works best when the building blocks are small, stateless, and predictable. Atomicss exposes objects of a single styling rule for you to compose together:
```js
console.log(display.none); // { display: 'none' }

console.log(margin.bottom.small); // { marginTop: '0.5em' }

console.log(Object.assign({}, display.block, margin.medium)); // { display: 'block', margin: '1em' }
```

### Developer Experience (DX)
Using Atomicss is incredibly fun, as modern editors are able to expose the entire export tree via auto-complete.

<!-- The Spotify Open Code of Conduct. This must be included. -->
## Code of Conduct
This project adheres to the [Open Code of Conduct][code-of-conduct]. By participating, you are expected to honor this code.

[code-of-conduct]: https://github.com/spotify/code-of-conduct/blob/master/code-of-conduct.md
