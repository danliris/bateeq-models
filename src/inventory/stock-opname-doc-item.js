'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Item = require('../master/item');

module.exports = class StockOpnameDocItem extends BaseModel {
    constructor(source) {
        super('stock-opname-doc-item', '1.0.0');

        // Define properties.
        this.itemId = {}; 
        this.item = new Item(); 
        this.qtyBeforeSO = 0;
        this.qtySO = 0;
        this.isAdjusted = false;
        this.remark = '';
        this.copy(source);
    }
}