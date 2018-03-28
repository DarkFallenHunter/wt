function selectionSort(arr)
{
	var len = arr.length

	for (var i = 0; i < len; i++)
	{
		var minInd = i

		for (var j = i + 1; j < len; j++)
			if (arr[j] < arr[minInd])
				minInd = j

		var tmp = arr[minInd]
		arr[minInd] = arr[i]
		arr[i] = tmp
	}

	return arr
}