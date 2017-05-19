'use strict'

var BaseModel = require('model-toolkit').BaseModel;
var Item = require('../master/item');

module.exports = class SPKItem extends BaseModel {
    constructor(source) {
        super('spk-item', '1.0.0');

        // Define properties.  
        this.itemId = {};
        this.item = new Item();
        this.quantity = 0;
        this.remark = '';
        this.sendQuantity = 0;
        this.copy(source);
    }
}