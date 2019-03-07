
var dog = require('./dog');
var cat = require('./1');
var Mouse = require('./2');

var Milu = new dog('Milu');
var Tom = new cat();
var Mickey = new Mouse('Micke');
try {
	Tom.eat(Milu);
} catch(e) {
	console.log("Error while cat eating a dog");
}
console.log(Tom);