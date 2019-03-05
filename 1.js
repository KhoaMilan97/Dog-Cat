function cat(){
	this.stomach = [];
}
cat.prototype.stomach = function(mouse){
	this.stomach.push(mouse);
}
module.exports = cat;