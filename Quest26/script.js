var add = document.getElementById('add'),
    modal = document.getElementById('modal'),
    closeModalBut = document.getElementById('close-modal'),
    modalAdd = document.getElementById('modal-add'),
    presentList = document.getElementById('present-list'),
    archiveList = document.getElementById('archive-list'),
    textArea = document.getElementById('adding-text'),
    alfSortButton = document.getElementById('alf-sort-button'),
    timeSortButton = document.getElementById('time-sort-button'),
    presentIndex = 0,
    archiveIndex = 0

add.onclick = function(){
  modal.classList.add('open-modal')
}

closeModalBut.onclick = function(){
  modal.classList.remove('open-modal')
}

modalAdd.onclick = function(){
  if (textArea.value === '')
    alert('Название записи не задано!')
  else {
    var newLi = document.createElement('li'),
        compBut = document.createElement('input'),
        delBut = document.createElement('input')

    compBut.classList.add('push-button')
    compBut.setAttribute('value','Выполнить')
    compBut.setAttribute('type','button')
    compBut.setAttribute('id','compBut'+presentIndex)
    compBut.setAttribute('onclick','compWork(id)')

    delBut.classList.add('push-button')
    delBut.setAttribute('value','Удалить')
    delBut.setAttribute('type','button')
    delBut.setAttribute('id','delBut'+presentIndex)
    delBut.setAttribute('onclick','delWork(id)')
    presentIndex++

    newLi.innerText = textArea.value
    newLi.setAttribute('id','presentLi'+presentIndex)
    newLi.setAttribute('data-time', new Date() - new Date(0))
    newLi.appendChild(compBut)
    newLi.appendChild(delBut)
    presentList.appendChild(newLi)
    textArea.value = ''
    modal.classList.remove('open-modal')
  }
}

function delWork(id){
  var li = document.getElementById(id).parentNode
  presentList.removeChild(li)
}

function timeDeterm(milliseconds)
{
  milliseconds = Math.floor(milliseconds / 1000)
  var seconds = milliseconds % 60
  milliseconds = Math.floor(milliseconds / 60)
  if (milliseconds < seconds)
    return seconds + ' сек.'
  else
    var minutes = milliseconds % 60
    milliseconds = Math.floor(milliseconds / 60)
    if (milliseconds < minutes)
      return minutes + ' мин. ' + seconds + ' сек.'
    else
      var hours = milliseconds % 24
      milliseconds = Math.floor(milliseconds / 24)
      if (milliseconds < hours)
        return hours + ' ч. ' + minutes + ' мин. ' + seconds + ' сек.'
      else
        var days = milliseconds
        return days + ' д. ' + hours + ' ч. ' + minutes + ' мин. ' + seconds + ' сек.'
}

function compWork(id){
  var li = document.getElementById(id).parentNode,
      newLi = document.createElement('li'),
      end = new Date() - new Date(0),
      start = Number(li.getAttribute('data-time'))
  
  
  newLi.innerText = li.innerText + ' Выполнено за: ' + timeDeterm(end - start)
  newLi.setAttribute('id','archiveLi'+archiveIndex)
  archiveIndex++
  
  presentList.removeChild(li)
  archiveList.appendChild(newLi)
}

function selectionSortTime(arr)
{
  var len = arr.length

  for (var i = 0; i < len; i++)
  {
    var minInd = i

    for (var j = i + 1; j < len; j++)
      if (Number(arr[j].getAttribute('data-time')) < Number(arr[minInd].getAttribute('data-time')))
        minInd = j

    var tmp = arr[minInd]
    arr[minInd] = arr[i]
    arr[i] = tmp
  }

  return arr
}

function selectionSortAlf(arr)
{
  var len = arr.length
  
  for (var i = 0; i < len; i++)
  {
    var minInd = i

    for (var j = i + 1; j < len; j++)
      if (arr[j].innerText < arr[minInd].innerText)
        minInd = j

    var tmp = arr[minInd]
    arr[minInd] = arr[i]
    arr[i] = tmp
  }
  
  return arr
}

timeSortButton.onclick = function(){
  var listItems = presentList.childNodes,
      items = []
  
  for (var i= 0; i < listItems.length; i++)
    items.push(listItems[i])
  
  items = selectionSortTime(items)
  
  while (presentList.childNodes.length > 0)
    presentList.removeChild(presentList.firstChild)
  
  for (var i = 0; i < items.length; i++)
    presentList.appendChild(items[i])
}

alfSortButton.onclick = function(){
  var listItems = presentList.childNodes,
      items = []
  
  for (var i= 0; i < listItems.length; i++)
    items.push(listItems[i])
  
  items = selectionSortAlf(items)
  
  while (presentList.childNodes.length > 0)
    presentList.removeChild(presentList.firstChild)
  
  for (var i = 0; i < items.length; i++)
    presentList.appendChild(items[i])
}