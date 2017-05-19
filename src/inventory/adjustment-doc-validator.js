require("should");
var validateAdjustmenItem = require("./adjustment-item-validator");


module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('storage');
    data.storage.should.instanceof(Object);

    data.should.have.property('storageId');
    data.storageId.should.instanceof(Object);

    data.should.have.property('items');
    data.items.should.instanceof(Array);

    for (var item of data.items) {
        validateAdjustmenItem(item);
    }
};