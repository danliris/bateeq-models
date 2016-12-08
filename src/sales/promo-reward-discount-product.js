'use strict'

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class PromoRewardDiscountProduct extends BaseModel {
    constructor(source) {
        super('promo-reward-discount-product', '1.0.0');
   
        this.unit = ''; //percentage, nominal
        this.discount1 = 0;
        this.discount2 = 0;
        this.nominal = 0;
        
        this.copy(source);
    }
}