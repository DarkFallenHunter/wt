var Dog = function(){
	var name = '',
			age = '1 month'

	function sleeping(){
		return 'ZzzZzzZZz'
	}

	function barkking(){
		return 'Woof-woof'
	}

	return {
		getName: function(){
			if (name === '')
				alert('У собакена ещё нет клички!\nНазовите его скорее!')
			else	
				return name
		},

		setName: function(newName){
			if (name === '')
				name = newName
			else
				alert('У собакена уже есть кличка!')
		},

		getAge: function(){
			return age
		},

		goSleep: function(){
			return sleeping()
		},

		getVoice: function(){
			return barkking()
		}
	}
}()