require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('name');
    data.name.should.instanceof(String);

    data.should.have.property('description');
    data.description.should.instanceof(String);

    data.should.have.property('address');
    data.address.should.instanceof(String);

    data.should.have.property('contact');
    data.description.should.instanceof(String);

    data.should.have.property('phone');
    data.phone.should.instanceof(String);

    data.should.have.property('PIC');
    data.PIC.should.instanceOf(String);

    data.should.have.property('import');
    data.import.should.instanceOf(Boolean);

    data.should.have.property('NPWP');
    data.NPWP.should.instanceOf(String);

    data.should.have.property('serialNumber');
    data.serialNumber.should.instanceOf(String);
};