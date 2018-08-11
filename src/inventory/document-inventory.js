'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var DocumentInventoryItem = require('./document-inventory-item');

module.exports = class DocumentInventory extends BaseModel {
    constructor(source) {
        super('document-inventory', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();

        this.referenceNo = '';
        this.referenceType = '';
        
        this.type = ''; // IN, OUT, RET-IN, RET-OUT

        this.storageId = {};
        this.storageCode = "";
        this.storageName = "";

        this.items = [];
        this.remark = '';

        this.copy(source);

        var _items = [];
        for (var item of this.items) {
            _items.push(new DocumentInventoryItem(item));
        }
        this.items = _items;
    }
};
