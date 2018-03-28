function countingSort(arr)
{
	var n = arr.length, count = [], sortArr = [];

	for (var i = 0; i < n; i++) 
		count[ i ] = 0;

	for (var i = 0; i < n-1; i++)
	{ 
		for (var j = i+1; j < n; j++)
		{ 
			if (arr[ i ] < arr[j]) 
	  			count[j]++;
			else 
	  			count[ i ]++;
		}
	}

	for (var i = 0; i < n; i++) 
		sortArr[count[ i ]] = arr[ i ];

	return sortArr;
}