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

dispatcher.on('common', function () {
  // run on all pages
});

dispatcher.on('home', function (message) {
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
