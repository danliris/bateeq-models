'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class StockOpnameBalance extends BaseModel {
    constructor(source) {
        super('stock-opname-balace', '1.0.0');

        // Define properties.
        this.code = "";
        this.storage = {};
        this.product = {};
        this.opnameDate = new Date();
        this.lastOpnameDate = new Date();
        this.copy(source);
    }
}