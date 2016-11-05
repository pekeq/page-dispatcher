import PageDispatcher from '../src/page-dispatcher.js'

const assert = require('assert')

describe('PageDispatcher', () => {
  it('emit registered single handler', function(done) {
    const d = new PageDispatcher()

    d.on('test', done)
    d.run('test')
  })

  it('emit registered multiple handlers', function() {
    const d = new PageDispatcher()
    let isFirstHandlerCalled = false
    let isSecondHandlerCalled = false

    d.on('test', () => isFirstHandlerCalled = true)
    d.on('test', () => isSecondHandlerCalled = true)
    d.run('test')

    assert.ok(isFirstHandlerCalled)
    assert.ok(isSecondHandlerCalled)
  })

  it('pass parameters to handlers', function() {
    const d = new PageDispatcher()
    const params = ['foo', 'bar']
    let passedParams

    d.on('test', (...args) => passedParams = args)
    d.run('test', ...params)

    assert.deepStrictEqual(params, passedParams)
  })
})
