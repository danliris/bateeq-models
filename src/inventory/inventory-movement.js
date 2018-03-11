'use strict'

var BaseModel = require('model-toolkit').BaseModel;
var Storage = require('../master/storage');
var Item = require('../master/item');
var Product = require('../master/product');

module.exports = class InventoryMovement extends BaseModel {
    constructor(source) {
        super('inventory-movement', '1.0.0');

        // Define properties. 
        this.inventoryId = {};
        this.storageId = {};
        this.storage = new Storage();
        this.date = new Date();
        this.reference = '';
        this.type = '';
        this.itemId = {};
        this.item = new Item();
        this.before = 0;
        this.quantity = 0;
        this.after = 0;
        this.remark = '';
        this.productId = {};
        this.product = new Product();
        this.copy(source);
    }
}