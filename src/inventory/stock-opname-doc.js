'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Storage = require('../master/storage');
var SODocItem = require('./stock-opname-doc-item');

module.exports = class StockOpnameDoc extends BaseModel {
    constructor(source) {
        super('stock-opname-doc', '1.0.0');

        // Define properties.
        this.code = ""; 
        this.storageId = {}; 
        this.storage = new Storage();
        this.items = [];
        this.isProcessed = false;
        this.copy(source);

        this.items = (this.items || []).map(item => new SODocItem(item));
    }
}