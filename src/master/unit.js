'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var division = require('./division');

module.exports = class Unit extends BaseModel {
    constructor(source) {
        super('unit', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';
        this.divisionId = {};
        this.division = new division();
       // this.storeId = {};
        //this.store = {};
        this.description = '';
        this.copy(source);
        this.division = new division(this.division);
    }
};