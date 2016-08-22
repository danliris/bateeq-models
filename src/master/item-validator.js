require("should");


var validateItem = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object); 

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('name');
    data.name.should.instanceof(String);

    data.should.have.property('description');
    data.description.should.instanceof(String);  
    
    data.should.have.property('items');
    data.items.should.instanceof(Array);
    for (var item of data.items)
        validateItem(item);

    data.should.have.property('tags');
    data.tags.should.instanceof(String);
};

module.exports = validateItem;