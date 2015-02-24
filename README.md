# toSource
Naive implementation of [Object.toSource](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource).

### Attention! Cyclical references are not checked!

Supports node/CommonJS, AMD and global _this_ object (browser)

#### Example CommonJS
```js
// require
var toSource = require('./toSource');
// (optional) add it to the Object prototype
Object.prototype.toSource = function(){ return toSource(this); };
var obj = {a:1,b:false};
obj.toSource();
// -> "{a:1,b:false}"
```

[![Build Status](https://travis-ci.org/pitermarx/toSource.svg?branch=master)](https://travis-ci.org/pitermarx/toSource)
[![Coverage Status](https://coveralls.io/repos/pitermarx/toSource/badge.svg?branch=master)](https://coveralls.io/r/pitermarx/toSource?branch=master)
