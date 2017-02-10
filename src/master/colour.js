'use strict';

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Colour extends BaseModel {
    constructor(source) {
        super('colour', '1.0.0');

        // Define properties.  
        this.code = '';
        this.name = '';

        this.copy(source);
    }
};