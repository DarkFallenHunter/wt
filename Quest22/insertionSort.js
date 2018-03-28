function insertionSort(arr)
{
	var len = arr.length

	for (var i = 1; i < len; i++)
	{
		var j = i - 1
		var value = arr[i]

		while (j >= 0 && arr[j] > value)
		{
			arr[j + 1] = arr[j]
			j--
		}

		arr[j + 1] = value
	}

	return arr
}