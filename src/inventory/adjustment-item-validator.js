require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('itemId');
    data.itemId.should.instanceof(Object);

    data.should.have.property('item');
    data.item.should.instanceof(Object);

    data.should.have.property('qtyBeforeAdjustment');
    data.qtyBeforeAdjustment.should.be.Number();

    data.should.have.property('type');
    data.type.should.instanceof(String); 

    data.should.have.property('qtyAdjustment');
    data.qtyAdjustment.should.be.Number();

    data.should.have.property('remark');
    data.remark.should.instanceof(String); 
};