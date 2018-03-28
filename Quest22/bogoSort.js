function isSorted(arr, len)
{
    while ( len > 1 )
    {
        len--
        if (arr[len] < arr[len-1])
            return false
    }
    return true
}

function bogoSort(arr)
{
    var len = arr.length

    while ( !isSorted(arr, len) )
        for (var i=0; i < len; i++)
        {
            var rand = Math.floor(Math.random() * len), tmp = arr[i]
            arr[i] = arr[rand]
            arr[rand] = tmp
        }

    return arr
}