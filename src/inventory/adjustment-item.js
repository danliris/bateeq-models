'use strict'

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class AdjustmentItem extends BaseModel {
    constructor(source) {
        super('adjustment-item', '1.0.0');

        // Define properties.  
        this.itemId = {};
        this.item = {};
        this.qtyBeforeAdjustment = 0;
        this.qtyAdjustment = 0;
        this.type='';
        this.remark = '';
        this.copy(source);
    }
}