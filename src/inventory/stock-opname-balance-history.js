'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class StockOpnameBalanceHistory extends BaseModel {
    constructor(source) {
        super('stock-opname-balace-history', '1.0.0');

        // Define properties.
        this.stockOpnameBalanceCode = "";
        this.statusBalance = "";
        this.remark = ""
        this.copy(source);
    }
}