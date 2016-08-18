'use strict';
import Dispatcher from '../src/page-dispatcher';

const dispatcher = new Dispatcher();

dispatcher.on('common', () => {
  console.log('run on all pages');
});

dispatcher.on('index', () => {
  console.log('only index');
});

dispatcher.on('about', () => {
  console.log('only about');
});

dispatcher.on('user', (id, name) => {
  console.log(`user: (${id})${name}`);
});

window.run = dispatcher.run.bind(dispatcher);
