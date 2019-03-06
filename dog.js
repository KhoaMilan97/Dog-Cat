var chalk = require('chalk');
function Dog(name){
	this.stomach = [];
	this.name = name;
}
 Dog.prototype.eat = function(cat){
 	 this.stomach.push(cat);	
 }
 Dog.prototype.sayHello = function() {
 	console.log("Hello! My name is " + chalk.red(this.name));
 };
 module.exports = Dog;