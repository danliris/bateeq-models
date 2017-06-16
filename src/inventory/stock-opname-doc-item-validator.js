require("should");
var validateItem = require("../master/item-validator");

module.exports = function(data) { 
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('itemId');
    data.itemId.should.instanceof(Object);

    data.should.have.property('item');
    data.item.should.instanceof(Object);
    validateItem(data.item);

    data.should.have.property('qtyBeforeSO');
    data.qtyBeforeSO.should.be.Number();

    data.should.have.property('qtySO');
    data.qtySO.should.be.Number();

    data.should.have.property('isAdjusted');
    data.isAdjusted.should.instanceOf(Boolean);

    data.should.have.property('remark');
    data.remark.should.instanceof(String);
};