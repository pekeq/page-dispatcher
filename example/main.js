'use strict';

var PageDispatcher = require('@yuheiy/page-dispatcher');

var dispatcher = new PageDispatcher();

dispatcher.on('common', function () {
  console.log('run on all pages');
});

dispatcher.on('index', function () {
  console.log('only index');
});

dispatcher.on('about', function () {
  console.log('only about');
});

dispatcher.on('user', function (id, name) {
  console.log(`user: (${id})${name}`);
});

window.run = dispatcher.run.bind(dispatcher);
