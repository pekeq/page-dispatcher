'use strict';
import Dispatcher from '../src/page-dispatcher';

const dispatcher = new Dispatcher();

dispatcher.route('common', () => {
  console.log('run on all pages');
});

dispatcher.route('index', () => {
  console.log('only index');
});

dispatcher.route('about', () => {
  console.log('only about');
});

dispatcher.route('user', (id, name) => {
  console.log(`user: (${id})${name}`);
});

window.run = dispatcher.run.bind(dispatcher);
