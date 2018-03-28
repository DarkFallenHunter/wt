function addItem(tree, item)
{
	if (tree.length == 0)
	{
		tree.push(item);
		tree.push([]);
		tree.push([]);
	}
	else 
		if (item > tree[0])
			addItem(tree[2],item)
		else
			addItem(tree[1],item)
}

function treeToArray(tree)
{
	if (tree.length == 0)
		return []
	else 
		return treeToArray(tree[1]).concat(tree[0],treeToArray(tree[2]))
}

function treeSort(arr)
{
	var len = arr.length
	var tree = []

	for (var i = 0; i < len; i++)
		addItem(tree,arr[i])

	arr = treeToArray(tree)

	return arr
}