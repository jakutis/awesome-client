# awesome-client

Thin wrapper around awesome-client command that enables interaction with Awesome WM.

- [Installation](#installation)
- [API](#api)

## Installation

  Install with [npm](https://www.npmjs.org/package/awesome-client):

    $ npm install --save awesome-client

## API

```javascript
var awesomeClient = require('awesome-client');

// restarts awesome
awesomeClient('awesome.restart()');

// same, but enables error checking
// if it failed, the err object will be an instance of Error
awesomeClient('awesome.restart()', function(err) {
    console.log(err);
});
```
