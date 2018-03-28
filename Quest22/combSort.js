function getNextGap(gap)
{
	gap = Math.floor(gap * 10 / 13)

	if (gap < 1)
		return 1
	return gap
}

function combSort(arr)
{
	var len = arr.length, gap = len, swapped = true

	while (gap != 1 || swapped == true)
	{
		gap = getNextGap(gap)
		swapped = false

		for (var i = 0; i < len - gap; i++)
			if (arr[i] > arr[i + gap])
			{
				swapped = true
				var tmp = arr[i]
				arr[i] = arr[i + gap]
				arr[i + gap] = tmp
			}
	}

	return arr
}