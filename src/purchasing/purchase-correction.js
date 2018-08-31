'use strict';
var BaseModel = require('model-toolkit').BaseModel;
var PurchaseCorrectionItem = require('./purchase-correction-item');

module.exports = class PurchaseCorrection extends BaseModel {
    constructor(source) {
        super('purchase-correction', '1.0.0');

        this.no = '';
        this.returNoteNo = '';
        this.date = new Date();
        this.correctionType = '';
        this.deliveryOrderId = {};
        this.deliveryOrder = {};
        this.useVat = false;
        this.useIncomeTax = false;
        this.remark = '';
        this.items = [];
        this.copy(source);

        this.items = (this.items || []).map(item => new PurchaseCorrectionItem(item));
    }
};