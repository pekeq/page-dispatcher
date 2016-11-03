export default class PageDispatcher {
  constructor() {
    this._handlers = {}
  }

  on(type, handler) {
    if (typeof handler !== 'function') {
      throw new TypeError('"handler" argument must be a function')
    }

    if (typeof this._handlers[type] === 'undefined') {
      this._handlers[type] = []
    }
    this._handlers[type].push(handler)

    return this
  }

  run(type, ...params) {
    const handlers = this._handlers[type]

    if (typeof handlers === 'undefined') {
      return false
    }

    handlers.forEach(handler => handler(...params))

    return true
  }
}
