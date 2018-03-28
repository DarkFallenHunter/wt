function quickSort(arr)
{
	function qSort(arr, left, right)
	{
		if (left < right)
		{
			var pivot = arr[right], i = left - 1

			for (var j = left; j <= right - 1; j++)
			{
				if (arr[j] <= pivot)
				{
					i++
					var tmp = arr[j]
					arr[j] = arr[i]
					arr[i] = tmp
				}
			}

			var tmp = arr[i + 1]
			arr[i + 1] = arr[right]
			arr[right] = tmp

			var pt =  (i + 1)

			qSort(arr, left, pt - 1)
			qSort(arr, pt + 1, right)
		}
	}

	var len = arr.length
	qSort(arr, 0, len - 1)
	return arr
}