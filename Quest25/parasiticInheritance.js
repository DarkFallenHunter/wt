function object(o){
	function F(){}
	F.prototype = o
	return new F()
}

function createAnotherDog(original){
	var copy = object(original)
	copy.sleeping = function(){
		alert('ZzzZzzZz')
	}
	return copy
}

var Dog = {
	name: 'Rex',
	back: 'Woof-woof',
	breed: 'labrador'
}

var anotherDog = createAnotherDog(Dog)
anotherDog.sleeping()