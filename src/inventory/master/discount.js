'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Store = require('../../master/store');

module.exports = class Discount extends BaseModel {
    constructor(source) {
        super('discount', '1.0.0');
        this.code = "";
        this.name = "";
        this.startDate = new Date();
        this.endDate = new Date();
        this.discountMapping = "";
        this.storeId = {};
        this.store = new Store();
        this.storeCategory = "";
        this.copy(source);
    }
}