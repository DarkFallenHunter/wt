function object(o){
	function F(){}
	F.prototype = o
	return new F()
}

var Dog = {
	name: 'Rex',
	back: 'Woof-woof',
	breed: 'labrador'
}

var anotherDog = object(Dog)
anotherDog.name = 'Bax'
anotherDog.breed = 'mops'