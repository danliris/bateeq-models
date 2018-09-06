'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var Uom = require("../master/uom");

module.exports = class SummaryInventory extends BaseModel {
    constructor(source) {
        super('summary-inventory', '1.0.0');

        // Define properties.
        this.productId = {};
        this.productCode = "";
        this.productName = "";

        this.storageId = {};
        this.storageCode = "";
        this.storageName = "";

        this.quantity = 0;
        this.uomId = {};
        this.uom = "";

        this.copy(source);
    }
};
