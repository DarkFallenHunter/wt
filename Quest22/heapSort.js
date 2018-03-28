function heapify(arr, len, i)
{
	function heapify_(arr, len, i)
	{
		var largest = i
		var l = 2*i + 1
		var r = 2*i + 2

		if (l < len && arr[l] > arr[largest])
			largest = l

		if (r < len && arr[r] > arr[largest])
			largest = r

		if (largest != i)
		{
			var tmp = arr[largest]
			arr[largest] = arr[i]
			arr[i] = tmp

			heapify_(arr, len, largest)
		}
	}

	arr = heapify_(arr, len, i)
	return arr
}

function heapSort(arr)
{
	var len = arr.length

	for (var i = Math.floor(len / 2) - 1; i >= 0; i--)
		heapify(arr, len, i)

	for (var i = len - 1; i >= 0; i--)
	{
		var tmp = arr[0]
		arr[0] = arr[i]
		arr[i] = tmp

		heapify(arr, i, 0)
	}

	return arr
}