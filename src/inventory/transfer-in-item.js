'use strict'

var BaseModel = require('model-toolkit').BaseModel;
var ArticleVariant = require('../master/item');

module.exports = class TransferInItem extends BaseModel {
    constructor(source) {
        super('transfer-in-item', '1.0.0');

        // Define properties.  
        this.itemId = {};
        this.item = {};
        this.quantity = 0;
        this.remark = '';
        this.copy(source);
    }
}