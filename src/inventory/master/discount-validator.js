require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('startDate');
    data.date.should.instanceof(Date);

    data.should.have.property('endDate');
    data.date.should.instanceof(Date);

    data.should.have.property('discountType');
    data.name.should.instanceOf(String);
};