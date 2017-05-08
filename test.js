'use strict'
const test = require('tape')
const deepResolveCwd = require('.')

test('deepResolveCwd()', t => {
  const resolved = deepResolveCwd(['mos', 'chalk', './package.json'])
  t.equal(require(resolved).name, 'chalk')

  t.throws(() => deepResolveCwd(['nonexistent']), Error)

  t.end()
})

test('deepResolveCwd.silent()', t => {
  const resolved = deepResolveCwd.silent(['mos', 'chalk', './package.json'])
  t.equal(require(resolved).name, 'chalk')

  t.equal(deepResolveCwd.silent(['nonexistent', './package.json']), null)

  t.end()
})
