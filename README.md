# Page Dispatcher

Divide logic of JavaScript by your page.

## Concept

[Details are here (Japanese)](https://ryden-inc.github.io/rookies/posts/page-dispatcher.html)

## Installation

```bash
$ npm install --save @yuheiy/page-dispatcher
```

## Usage

```javascript
'use strict';

var PageDispatcher = require('@yuheiy/page-dispatcher');
var dispatcher = new PageDispatcher();

// run on all pages
console.log('common');

dispatcher.on('home', function() {
  // run only on home
  console.log('home');
});

var currentPageType = document.body.dataset.pageType;
dispatcher.run(currentPageType);
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Home - Site Name</title>
    <script src="bundle.js" defer></script>
  </head>

  <body data-page-type="home">
    <h1>Home</h1>
  </body>
</html>
```

## Another way

```javascript
'use strict';

var PageDispatcher = require('@yuheiy/page-dispatcher');
var dispatcher = new PageDispatcher();

dispatcher.on('common', function() {
  // run on all pages
  console.log('common');
});

dispatcher.on('home', function(message) {
  // run only on home
  console.log(message);
});

window.run = dispatcher.run.bind(dispatcher);
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Home - Site Name</title>
  </head>

  <body>
    <h1>Home</h1>

    <script src="bundle.js"></script>
    <script>
      run('common');
      run('home', 'This is a home of this site.');
    </script>
  </body>
</html>
```
