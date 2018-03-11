'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Storage = require('../master/storage');
var Item = require('../master/item');
var Product = require('../master/product');

module.exports = class Inventory extends BaseModel {
    constructor(source) {
        super('inventory', '1.0.0');

        // Define properties. 
        this.storageId = {}; 
        this.storage = new Storage();
        this.itemId = {};
        this.item = new Item();
        this.quantity = 0;
        this.productId = {};
        this.product = new Product();
        this.copy(source);
    }
}