function merge(arr, left, mid, right)
{
    var i, j, k = left
    var leftLen = mid - left + 1
    var rightLen = right - mid

    var leftArr = new Array(leftLen)
    var rightArr = new Array(rightLen)

    for (i = 0; i < leftLen; i++)
        leftArr[i] = arr[left + i]
    for (j = 0; j < rightLen; j++)
        rightArr[j] = arr[mid + 1 + j]

    i = 0
    j = 0

    while (i < leftLen && j < rightLen)
    {
        if (leftArr[i] < rightArr[j])
        {
            arr[k] = leftArr[i]
            i++
        }
        else
        {
            arr[k] = rightArr[j]
            j++
        }

        k++
    }

    while (i < leftLen)
    {
        arr[k] = leftArr[i]
        i++
        k++
    }

    while (j < rightLen)
    {
        arr[k] = rightArr[j]
        j++
        k++
    }

    return arr
}

function mergeSort(arr)
{
    function merge_sort(arr, left, right)
    {
        if (left < right)
        {
            var mid = Math.floor((left + right) / 2)

            merge_sort(arr, left, mid)
            merge_sort(arr, mid + 1, right)
            merge(arr, left, mid, right)
        }
    }

    var len = arr.length
    merge_sort(arr, 0, len - 1)
    return arr
}