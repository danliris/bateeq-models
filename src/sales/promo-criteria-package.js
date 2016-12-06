'use strict'

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class PromoCriteriaPackage extends BaseModel {
    constructor(source) {
        super('promo-criteria-package', '1.0.0');
    
        this.itemId = {};
        this.item = {};
        
        this.copy(source);
    }
}