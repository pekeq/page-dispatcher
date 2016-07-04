'use strict';

export default class PageDispatcher {
  constructor() {
    this._routes = [];
  }

  route(name, callback) {
    this._routes.push({
      name,
      callback
    });
    return this;
  }

  run(name, ...params) {
    this._routes
      .filter((route) => name === route.name)
      .forEach(({callback}) => callback(...params));
  }
}
