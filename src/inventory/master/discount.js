'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Discount extends BaseModel {
    constructor(source) {
        super('discount', '1.0.0');
        this.code = "";
        this.name = "";
        this.startDate = new Date();
        this.endDate = new Date();
        this.discountType = "";
        this.copy(source);
    }
}