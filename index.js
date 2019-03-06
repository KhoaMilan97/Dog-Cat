
var dog = require('./dog');
var cat = require('./1');
var Milu = new dog('Milu');
var Tom = new cat();
Milu.eat(Tom);
console.log(Milu);