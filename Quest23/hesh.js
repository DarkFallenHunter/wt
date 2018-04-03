var HashMap = function(size)
{
    if (size === undefined)
        this.size = 16
    else 
        this.size = size

    this.index = 0

    this.arr = Array(this.size)
    for (var i = 0; i < this.size; i++)
        this.arr[i] = null

    var Node = function(key, value)
    {
        this.key = key
        this.value = value
        this.next = null
    }

    function hashCode(key, size)
    {
        if (typeof key == 'number')
            return key % size

        if (typeof key == 'string')
        {
            var code = 0

            for (var i = 0; i < key.length; i++)
                code += key.charCodeAt(i)

            return code % size
        }
    }

    this.ReHash = function()
    {
      if (this.index / this.size >= 0.75)
        {
            var newSize = this.size * 2
            var newArr = Array(newSize)

            for (var i = 0; i < newArr.length; i++)
                newArr[i] = null

            for (var i = 0; i < this.arr.length; i++)
            {
                if (this.arr[i] != null)
                {
                    var helpNode = this.arr[i]

                    while (helpNode != null)
                    {
                        var code = hashCode(helpNode.key, newSize)

                        if (newArr[code] == null)
                            newArr[code] = new Node(helpNode.key, helpNode.value)
                        else
                        {
                            var node = newArr[code]

                            while (node.next != null)
                                node = node.next

                            node.next = new Node(helpNode.key, helpNode.value)
                        }

                        helpNode = helpNode.next
                    }
                }
            }

            this.arr = newArr
            this.size = newSize
        }
    }

    this.Insert = function(key, value)
    {
        this.ReHash()

        var code = hashCode(key, this.size)

        if (this.arr[code] == null)
            this.arr[code] = new Node(key,value)
        else
        {
            var helpNode = this.arr[code]

            while (helpNode.next)
                helpNode = helpNode.next

            helpNode.next = new Node(key, value)
        }
        this.index++;
    }

    this.Get = function(key)
    {
        var code = hashCode(key, this.size)

        if (this.arr[code] == null)
            return null

        var helpNode = this.arr[code]

        while (helpNode != null)
        {
            if (helpNode.key == key)
                return helpNode.value

            helpNode = helpNode.next
        }

        return null
    }

    this.Remove = function(key)
    {
        var code = hashCode(key, this.size)

        if (this.arr[code] == null)
            return
        else
            if (this.arr[code].key == key)
                this.arr[code] = this.arr[code].next
            else
            {
                var helpNode = this.arr[code]
                var prevNode

                while(helpNode.key != key)
                {
                    if (helpNode == null)
                        return

                    prevNode = helpNode
                    helpNode = helpNode.next
                }

                prevNode.next = helpNode.next
            }
      this.index--
    }
}