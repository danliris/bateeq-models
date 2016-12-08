'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class SalesReturnItem extends BaseModel {
    constructor(source) {
        super('sales-return-item', '1.0.0');

        // Define properties.  
        this.itemId = {};
        this.item = {};
        this.quantity = 0;
       
        this.copy(source);
    }
}