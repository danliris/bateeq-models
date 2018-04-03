require("should");
var validateStore = require("./../../master/store-validator");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('startDate');
    data.startDate.should.instanceof(Date);

    data.should.have.property('endDate');
    data.endDate.should.instanceof(Date);

    data.should.have.property('discountMapping');
    data.discountMapping.should.instanceOf(String);

    data.should.have.property('storeId');
    data.storeId.should.instanceof(Object);

    data.should.have.property('store');
    data.store.should.instanceof(Object);

    data.should.have.property('storeCategory');
    data.storeCategory.should.instanceOf(String);

    data.should.have.property('itemId');
    data.itemId.should.instanceof(Object);

    data.should.have.property('item');
    data.item.should.instanceof(Object);
};