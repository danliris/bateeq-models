'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class CostCalculationDocument extends BaseModel {
    constructor(source) {
        super('cost-calculation-document', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();

        this.items = [];
        this.remark = '';

        this.copy(source);
    }
}