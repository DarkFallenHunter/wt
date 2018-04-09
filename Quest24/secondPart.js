var animal = {
  eats: true,
  sleeps: true
}

var dog = {
  bark: 'Woof-woof',
  wagTheTail: true,
  __proto__: animal
}

Object.defineProperty(dog, 'bark', {
  enumerable: false
})

var labrador = {
  name: 'John',
  bark: 'Woof-woof-woof',
  __proto__: dog
}

Object.defineProperty(labrador, 'name', {
  enumerable: false
})

var checkInBut = document.getElementById('checkInBut'),
    showProps = document.getElementById('showProps'),
    showKeys = document.getElementById('showKeys'),
    showPropsNames = document.getElementById('showPropsNames'),
    barkkingBut = document.getElementById('barkkingBut'),
    changeSleepsBut = document.getElementById('changeSleepsBut')

//Демонстрация работы in. Свойство будет искаться по всей цепочке прототипов
checkInBut.onclick = function(){
  if (document.getElementById('checkInText').value in labrador)
    alert('Свойство присутствует.')
  else
    alert('Свойство отсутствует.')
}

//Демонстрация работы for ... in. Будут выведены только свойства с enumerable = true по всей цепочке
showProps.onclick = function(){
  var str = ''
  for (var prop in labrador)
    str += prop + '\n'
  alert(str)
}

//Демонстрация работы keys. Выведутся все свойства объекта с enumerable = true
showKeys.onclick = function(){
  alert(Object.keys(labrador))
}

//Демонстрация работы getOwnPropertyNames. Выведутся все свойства объекта
showPropsNames.onclick = function(){
  alert(Object.getOwnPropertyNames(labrador))
}

//Свойство bark у объекта labrador перекрывается такое же свойство у dog
barkkingBut.onclick = function(){
  alert(labrador.bark)
}

//Свойства, взятые от прототипа доступны только на чтение
changeSleepsBut.onclick = function(){
  labrador.sleeps = false
  alert('animal.sleeps = ' + animal.sleeps)
}