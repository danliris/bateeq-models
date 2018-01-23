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

    data.supplier.should.have.property('PIC');
    data.supplier.PIC.should.instanceOf(String);

    data.supplier.should.have.property('import');
    data.supplier.import.should.instanceOf(Boolean);

    data.supplier.should.have.property('NPWP');
    data.supplier.NPWP.should.instanceOf(String);

    data.supplier.should.have.property('serialNumber');
    data.supplier.serialNumber.should.instanceOf(String);
};