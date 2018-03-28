function getMax(arr, len)
{
    var max = arr[0];

    for (var i = 1; i < len; i++)
        if (arr[i] > max)
            max = arr[i]

    return max;
}
 
function radixSort(arr)
{
    var len = arr.length, max = getMax(arr, len);
 
    for (var exp = 1; max / exp > 0; exp *= 10)
    {
        var output = new Array(len), i, count = [0,0,0,0,0,0,0,0,0,0]
        
        for (i = 0; i < len; i++)
            output[i] = 0

        for (i = 0; i < len; i++)
            count[(Math.floor(arr[i] / exp) % 10)]++

        for (i = 1; i < 10; i++)
            count[i] += count[i - 1]
     
        for (i = len - 1; i >= 0; i--)
        {
            output[(count[(Math.floor(arr[i] / exp) % 10)] - 1)] = arr[i]
            count[(Math.floor(arr[i] / exp) % 10)]--
        }
     
        for (i = 0; i < len; i++)
            arr[i] = output[i]
    }
    
    return arr
}