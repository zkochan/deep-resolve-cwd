# deep-resolve-cwd

> Resolve the path of a module through a sequence of packages from the current working directory

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/deep-resolve-cwd.svg)](https://www.npmjs.com/package/deep-resolve-cwd) [![Build Status](https://img.shields.io/travis/zkochan/deep-resolve-cwd/master.svg)](https://travis-ci.org/zkochan/deep-resolve-cwd)
<!--/@-->

## Installation

```sh
npm i -S deep-resolve-cwd
```

## Usage

```js
const deepResolveCwd = require('deep-resolve-cwd')

console.log(deepResolveCwd(['mos', 'chalk', './package.json']))
//> /home/zkochan/src/deep-resolve-from/node_modules/.registry.npmjs.org/chalk/1.1.3/node_modules/chalk/package.json
```

## API

### `deepResolveCwd(moduleIds)`

Like `require()`, throws when the module can't be found.

### `deepResolveCwd.silent(fromDir, moduleIds)`

Returns `null` instead of throwing when the module can't be found.

#### moduleIds

Type: `string[]`

An array of module IDs, a module ID is something that you pass to `require()`.

## Related

- [deep-resolve-from](https://github.com/zkochan/deep-resolve-from) - Resolve the path of a module through a sequence of packages

## License

[MIT](./LICENSE) © [Zoltan Kochan](https://www.kochan.io)
