'use strict'
let testmods = require('./classlist')

test('Hello World: hello should greet the world', () => {
  let hello = 'world'
  expect(hello).toEqual('world')
})

test('mpsq', () => {
  let teee = 'fux'
  testmods.add(teee)
  expect(testmods.get(0)).toEqual(teee)
})
