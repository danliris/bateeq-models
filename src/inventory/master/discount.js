'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Discount extends BaseModel {
    constructor(source) {
        super('discount', '1.0.0');
        this.code = "";
        this.discountOne = 0;
        this.discountTwo = 0;
        this.startDate = new Date();
        this.endDate = new Date();
        this.stores = [];
        this.storeCategory = "";
        this.items = [];
        this.information = "";
        this.copy(source);
    }
}