function bucketSort(arr)
{
	var len = arr.length, bucketsLen = 5, maxElem = arr[0], minElem = arr[0]

	for (var i = 0; i < len; i++)
		if (arr[i] < minElem)
			minElem = arr[i]
		else
			if (arr[i] > maxElem)
				maxElem = arr[i]

	bucketsLen = Math.floor((maxElem - minElem) / bucketsLen + 1)
	if (bucketsLen < 5)
		bucketsLen = 5
	
	var buckets = new Array(bucketsLen)

	for (var i = 0; i < buckets.length; i++)
		buckets[i] = []

	for (var i = 0; i < len; i++)
	{
		var bi = Math.floor((arr[i] - minElem) / bucketsLen)
		buckets[bi].push(arr[i])
	}

	var index = 0
	for (var i = 0; i < buckets.length; i++)
	{
		buckets[i] = insertionSort(buckets[i])
		for (var j = 0; j < buckets[i].length; j++)
		{
			arr[index] = buckets[i][j]
			index++
		}
	}

	return arr
}