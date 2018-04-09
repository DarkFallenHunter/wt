function Animal(){
	this.eats = true
	this.sleeps = true

	this.sleeping = function(){
		return 'ZzzZzZzzz'
	}
}

function Dog(){
	Animal.call(this)

	this.bark = 'Woof-woof'
	this.wagTheTail = true

	this.barkking = function(){
		return this.bark
	}
}

function Labrador(name){
	Dog.call(this)

	this.Name = name
}

var rex = new Labrador('Rex')
alert(rex.sleeping())