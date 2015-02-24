# toSource
Naive implementation of [Object.toSource](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource).

### Attention! Cyclical references are not checked!

Supports node/CommonJS, AMD and global _this_ object (browser)

#### Example CommonJS
```js
var toSource = require('./toSource');
toSource({a:1,b:false});
// -> "{a:1,b:false}"
```

#### Adding to Object.prototype
```js
Object.prototype.toSource = function(){ return toSource(this); };
```

[![Build Status](https://travis-ci.org/pitermarx/toSource.svg?branch=master)](https://travis-ci.org/pitermarx/toSource)
[![Coverage Status](https://coveralls.io/repos/pitermarx/toSource/badge.svg?branch=master)](https://coveralls.io/r/pitermarx/toSource?branch=master)
