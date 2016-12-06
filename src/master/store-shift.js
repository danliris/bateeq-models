'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class StoreShift extends BaseModel {
    constructor(source) {
        super('store-shift', '1.0.0');

        this.shift = 0;
        this.dateFrom = new Date();
        this.dateTo = new Date();
        
        this.copy(source);
    }
}