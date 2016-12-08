'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class Finishing extends BaseModel {
    constructor(source) {
        super('finishing', '1.0.0');

        // Define properties.
        this.code = '';
        this.date = new Date();
        this.items = [];
        
        this.copy(source);
    }
}