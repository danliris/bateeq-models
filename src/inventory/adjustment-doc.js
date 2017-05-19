'use strict'

var BaseModel = require('model-toolkit').BaseModel;
var AdjustmentItem = require('./adjustment-item');

module.exports = class AdjustmentDoc extends BaseModel {
    constructor(source) {
        super('adjustment-doc', '1.0.0');

        // Define properties.
        this.code = '';
        this.storage = {};
        this.storageId = {};
        this.items = [];
        this.copy(source);

        var _items = [];
        for (var item of this.items) {
            _items.push(new AdjustmentItem(item));
        }
        this.items = _items;
    }
}