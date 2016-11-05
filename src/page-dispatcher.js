export default class PageDispatcher {
  constructor() {
    this._handlers = new Map()
  }

  on(type, handler) {
    if (typeof handler !== 'function') {
      throw new TypeError('"handler" argument must be a function')
    }

    const handlers = this._handlers.get(type) || new Set()
    handlers.add(handler)
    this._handlers.set(type, handlers)

    return this
  }

  run(type, ...params) {
    const handlers = this._handlers.get(type)

    if (typeof handlers === 'undefined') {
      return false
    }

    for (const handler of handlers) {
      handler(...params)
    }

    return true
  }
}
