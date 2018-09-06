require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('discountOne');
    data.discountOne.should.instanceOf(Number);

    data.should.have.property('discountTwo');
    data.discountTwo.should.instanceOf(Number);

    data.should.have.property('startDate');
    data.startDate.should.instanceof(Date);

    data.should.have.property('endDate');
    data.endDate.should.instanceof(Date);
    
    data.should.have.property('stores');
    data.stores.should.instanceof(Array);

    data.should.have.property('storeCategory');
    data.storeCategory.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceof(Array);

    data.should.have.property('information');
    data.information.should.instanceOf(String);
};