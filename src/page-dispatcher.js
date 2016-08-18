'use strict';

class PageDispatcher {
  constructor() {
    this._handlers = {};
  }

  on(type, handler) {
    if (!this._handlers[type]) {
      this._handlers[type] = [];
    }
    this._handlers[type].push(handler);
  }

  run(type, ...params) {
    const handlers = this._handlers[type];
    handlers.forEach(handler => handler(...params));
  }
}

module.exports = PageDispatcher;
