function Animal(){
	this.eats = true
	this.sleeps = true
}

Animal.prototype.sleeping = function(){
	return 'ZzzZzZzzz'
}

function Dog(){
	this.bark = 'Woof-woof'
	this.wagTheTail = true
}

Dog.prototype = new Animal()

Dog.prototype.barkking = function(){
	return this.bark
}

function Labrador(name){
	this.Name = name
}

Labrador.prototype = new Dog()

var rex = new Labrador('Rex')
alert(rex.sleeping())