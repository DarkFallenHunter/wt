function randArr(maxLength)
{
  var len = Math.floor(Math.random() * maxLength)
  var arr = new Array(len > 4 ? len : 4)
  
  for (var i = 0; i < arr.length; i++)
    arr[i] = Math.floor(Math.random() * 500)
    
  return arr
}

var insertionSortBut = document.getElementById('insertion-sort-but')

insertionSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = insertionSort(arr)
  sortArrCell.innerHTML = arr
}

var selectionSortBut = document.getElementById('selection-sort-but')

selectionSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = selectionSort(arr)
  sortArrCell.innerHTML = arr
}

var mergeSortBut = document.getElementById('merge-sort-but')

mergeSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = mergeSort(arr)
  sortArrCell.innerHTML = arr
}

var heapSortBut = document.getElementById('heap-sort-but')

heapSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = heapSort(arr)
  sortArrCell.innerHTML = arr
}

var quickSortBut = document.getElementById('quick-sort-but')

quickSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = quickSort(arr)
  sortArrCell.innerHTML = arr
}

var bubbleSortBut = document.getElementById('bubble-sort-but')

bubbleSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = bubbleSort(arr)
  sortArrCell.innerHTML = arr
}

var shellSortBut = document.getElementById('shell-sort-but')

shellSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = shellSort(arr)
  sortArrCell.innerHTML = arr
}

var combSortBut = document.getElementById('comb-sort-but')

combSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = combSort(arr)
  sortArrCell.innerHTML = arr
}

var countingSortBut = document.getElementById('counting-sort-but')

countingSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = countingSort(arr)
  sortArrCell.innerHTML = arr
}

var bucketSortBut = document.getElementById('bucket-sort-but')

bucketSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = bucketSort(arr)
  sortArrCell.innerHTML = arr
}

var treeSortBut = document.getElementById('tree-sort-but')

treeSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = treeSort(arr)
  sortArrCell.innerHTML = arr
}

var radixSortBut = document.getElementById('radix-sort-but')

radixSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = radixSort(arr)
  sortArrCell.innerHTML = arr
}

var bogosortSortBut = document.getElementById('bogosort-but')

bogosortSortBut.onclick = function() {
  var arr = randArr(12),
      unsortArrCell = document.getElementById('unsort-arr-cell'),
      sortArrCell = document. getElementById('sort-arr-cell')
  
  unsortArrCell.innerHTML = arr
  arr = bogoSort(arr)
  sortArrCell.innerHTML = arr
}
