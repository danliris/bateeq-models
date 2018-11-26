'use strict';
var BaseModel = require('model-toolkit').BaseModel;

module.exports = class StockOpnameProductRecord extends BaseModel {
    
    constructor(source) {
        super('stock-opname-product-record', '1.0.0');
        this.code = "";
        this.name = "";
        this.quantity = 0;
        this.copy(source);
    }
}