'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class StockOpnameProductRecord extends BaseModel {
    constructor(source) {
        super('stock-opname-product-record', '1.0.0');

        // Define properties.
        this.productCode = "";
        this.productName = "";
        this.quantityOpname = 0;
        this.copy(source);
    }
}