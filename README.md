# Page Dispatcher

Divide methods by HTML files.

## Concept

[Details are here.](https://ryden-inc.github.io/rookies/posts/page-dispatcher.html)

## Installation

```bash
$ npm install @yuheiy/page-dispatcher
```

## Usage

```javascript
'use strict';

var Dispatcher = require('@yuheiy/page-dispatcher');
var dispatcher = new Dispatcher();

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

    <script src="app.js"></script>
    <script>
      run('common');
      run('home', 'This is a home of this site.');
    </script>
  </body>
</html>
```
