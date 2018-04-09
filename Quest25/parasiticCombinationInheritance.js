function object(o){
	function F(){}
	F.prototype = o
	return new F()
}

function inheritProtorype(subType, superType){
	var prototype = object(superType.prototype)
	prototype.constructor = subType
	subType.prototype = prototype
}

function Animal(){
	this.eats = true
	this.sleeps = true
}

Animal.prototype.sleeping = function(){
	return 'ZzzZzZzzz'
}

function Dog(){
	Animal.call(this)

	this.bark = 'Woof-woof'
	this.wagTheTail = true
}

inheritProtorype(Dog, Animal)

Dog.prototype.barkking = function(){
	return this.bark
}

function Labrador(name){
	Dog.call(this)
	this.Name = name
}

inheritProtorype(Labrador, Dog)

var rex = new Labrador('Rex')
alert(rex.sleeping())