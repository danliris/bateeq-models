require("should");
var validateStorage = require("../master/storage-validator");
var validateArticleVariant = require('../master/item-validator');

module.exports = function(data) { 
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('storageId');
    data.storageId.should.instanceof(Object);

    data.should.have.property('storage');
    data.storage.should.instanceof(Object);
    validateStorage(data.storage);

    data.should.have.property('itemId');
    data.itemId.should.instanceof(Object);

    data.should.have.property('item');
    data.item.should.instanceof(Object);
    validateArticleVariant(data.item);

    data.should.have.property('quantity');
    data.quantity.should.be.Number();

    data.should.have.property('productId');
    data.productId.should.instanceof(Object);

    data.should.have.property('product');
    data.product.should.instanceof(Object);
    validateArticleVariant(data.product);
};