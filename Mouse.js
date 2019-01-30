function Mouse(name) {
	this.name = name;
}

Mouse.prototype.die = function() {
	this.isDead = false;
};

module.exports = Mouse;