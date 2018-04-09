function createUnconfObj(){
//Свойство value1 нельзя удалять, изменять его атрибуты, 
//преобразовывать в свойство с функциями доступа
  var obj = {
    value1: 50
  }
  Object.defineProperty(obj, 'value2', {
    configurable: false,
    enumerable: true,
    writable: true,
    value: 100
  })
  return obj
}

function createUnenumObj(){
//Свойство value1 не учитывается в цикле for-in
  var obj = {
    value1: 50
  }
  Object.defineProperty(obj, 'value2', {
    configurable: true,
    enumerable: false,
    writable: true,
    value: 100
  })
  return obj
}

function createUnwriteObj(){
//Свойство value1 только для записи
  var obj = {
    value1: 50
  }
  Object.defineProperty(obj, 'value2', {
    configurable: true,
    enumerable: true,
    writable: false,
    value: 100
  })
  return obj
}

function createFuncPropObj(){
//Объект со свойством с функциональным доступом
  var persone = {
    yearOfBirth: 1997,
    _age: 21
  }
  Object.defineProperty(persone, 'age', {
    get: function(){
      return this._age;
    },
    set: function(newAge){
      this.yearOfBirth = 2018 - newAge;
      this._age = newAge;
    }
  })
  return persone
}

//Создание нерасширяемого объекта
function createUnexterObj()
{
  var obj = {
    value1: 10,
    value2: 20
  }
  Object.defineProperty(obj, 'setValue', {
    get: function(){
      return this.value1
    },
    set: function(newValue){
      this.value1 = newValue
    }
  })
  Object.preventExtensions(obj)
  return obj
}

//Создание нерасширяемого и неконфигурируемого объекта
function createSealedObj()
{
  var obj = {
    value1: 10,
    value2: 20
  }
  Object.defineProperty(obj, 'setValue', {
    get: function(){
      return this.value1
    },
    set: function(newValue){
      this.value1 = newValue
    }
  })
  Object.seal(obj)
  return obj
}

//Создание замороженного объекта
function createFreezedObj()
{
  var obj = {
    value1: 10,
    value2: 20
  }
  Object.defineProperty(obj, 'setValue', {
    get: function(){
      return this.value1
    },
    set: function(newValue){
      this.value1 = newValue
    }
  })
  Object.freeze(obj)
  return obj
}

var obj,
    objFuncProp = createFuncPropObj(),
    newObj,
    unconfBut = document.getElementById('unconfBut'),
    unenumBut = document.getElementById('unenumBut'),
    unwriteBut = document.getElementById('unwriteBut'),
    showDesc = document.getElementById('showDesc'),
    addBut = document.getElementById('addBut'),
    sumBut = document.getElementById('sumBut'),
    delBut = document.getElementById('delBut'),
    funcPropBut = document.getElementById('funcPropBut'),
    showDescFunc = document.getElementById('showDescFunc'),
    changeAge = document.getElementById('changeAge'),
    showValues = document.getElementById('showValues'),
    ubextObjBut = document.getElementById('ubextObjBut'),
    sealObjBut = document.getElementById('sealObjBut'),
    freezeObjBut = document.getElementById('freezeObjBut'),
    showTypeBut = document.getElementById('showTypeBut'),
    addValueBut = document.getElementById('addValueBut'),
    showObjBut = document.getElementById('showObjBut'),
    setValueBut = document.getElementById('setValueBut'),
    delValueBut = document.getElementById('delValueBut')

unconfBut.onclick = function(){
  obj = createUnconfObj()
}

unenumBut.onclick = function(){
  obj = createUnenumObj()
}

unwriteBut.onclick = function(){
  obj = createUnwriteObj()
}

//Добавление 50 для демонстрации writable
addBut.onclick = function(){
  obj.value2 += 50
}

//Вывод суммы свойств для демострации enumerable
sumBut.onclick = function(){
  var sum = 0
  for (var i in obj)
    sum += Object.getOwnPropertyDescriptor(obj, i).value
  alert('Sum of values: ' + sum)
}

//Удаление свойства для демонстрации configurable
delBut.onclick = function(){
  delete obj.value2
}

//Вывод информации о свойстве
showDesc.onclick = function(){
  var description = Object.getOwnPropertyDescriptor(obj,'value2')
  if (description !== undefined)
  alert('Configurable: ' + description.configurable + '\nEnumerable: ' + description.enumerable +
    '\nWritable: ' + description.writable + '\nValue: ' + description.value)
  else
    alert('Value deleted!')
}

//Демонстрация работы set
changeAge.onclick = function(){
  objFuncProp.age = document.getElementById('age').value
}

//Демонстрация работы get
showValues.onclick = function(){
  alert('Age: ' + objFuncProp.age + '\nYear of birth: ' + objFuncProp.yearOfBirth)
}

//Вывод информации о свойстве
showDescFunc.onclick = function(){
  var description = Object.getOwnPropertyDescriptor(objFuncProp,'age')
  alert('Value: ' + description.value + '\nEnumerable: ' + description.enumerable +
    '\nSet: ' + description.set + '\nGet: ' + description.get)
}

//Создание нерасширяемого объекта
unextObjBut.onclick = function(){
  newObj = createUnexterObj()
}

//Создание нерасширяемого и неконфигурируемого объекта
sealObjBut.onclick = function(){
  newObj = createSealedObj()
}

//Создание замороженного объекта
freezeObjBut.onclick = function(){
  newObj = createFreezedObj()
}

//Вывод типа объекта
showTypeBut.onclick = function(){
  if (Object.isFrozen(newObj))
        alert('Объект является замороженным.')
  else
    if (Object.isSealed(newObj))
      alert('Объект является нерасширяемым и неконфигурируемым.')
    else
      if (!Object.isExtensible(newObj))
        alert('Объект является нерасширяемым.')
}

//Добавление нового свойства
addValueBut.onclick = function(){
  newObj.value3 = 30
}

//Вывод свойств объекта
showObjBut.onclick = function(){
  for (var i in newObj)
    alert(i + ': ' + Object.getOwnPropertyDescriptor(newObj, i).value)
}

//Изменение свойства через set
setValueBut.onclick = function(){
  newObj.setValue = 30
}

//Удаление свойства
delValueBut.onclick = function(){
  delete newObj.value2
}