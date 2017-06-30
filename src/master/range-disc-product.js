'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class RangeDiscProduct extends BaseModel{
    constructor(source){
        super('range-disc-product', '1.0.0');
        
        // Superclass properties
        this.code = '';
        this.name = '';
        this.description = '';

        // This class properties
        this.discFrom = 0;
        this.discTo = 0;
        this.type = '';

        this.copy(source);
    }
}