var List = function() 
{
	var Node = function(value)
	{
		this.value = value
		this.next = null
	}

	this.first = null, this.last = null

	List.prototype.push = function(value) 
	{
		var newNode = new Node(value)

		if (this.first == null)
			this.first = this.last = newNode
		else
		{
			this.last.next = newNode
			this.last = newNode
		}
	}

	List.prototype.pop = function()
	{
		var node = this.first.next

		while (node.next != last)
			node = node.next

		var value = this.last
		this.last = node
		return value
	}
}