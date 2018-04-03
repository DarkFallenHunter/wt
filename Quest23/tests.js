var map = new HashMap()
    
describe('HashMap', function() {
  
    it('Добавить элемент.', function() {
        map.Insert(43,'First');
        assert.equal(map.Get(43),'First');
    });

    it('Добавить элемент.', function() {
        map.Insert('Second',2);
        assert.equal(map.Get('Second'),2);
    });

    it('Добавить элемент с коллизией.', function() {
        map.Insert(11,'Third');
        assert.equal(map.Get(43),'First');
    });

    it('Добавить элементы для рехеширования.', function() {
        map.Insert(16,'Fourth');
        map.Insert(25,'Fifth');
        map.Insert('Sixth',56);
        map.Insert(38,'Seventh');
        map.Insert('Eighth',8);
        map.Insert(12,'Ninth');
        map.Insert(29,'Tenth');
        map.Insert(21,'Eleventh');
        map.Insert(31,12);
        map.Insert(75,13)
        assert.equal(map.size,32);
    });

    it('Удалить элемент.', function() {
        map.Remove(38);
        assert.equal(map.Get(38),null);
    });

    it('Удалить элемент.', function() {
        map.Remove('Second');
        assert.equal(map.Get('Second'),null);
    });

    it('Удалить элемент с коллизией.', function() {
        map.Remove(11);
        assert.equal(map.Get(11),null);
    });
});