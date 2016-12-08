'use strict'

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class CardType extends BaseModel {
    constructor(source) {
        super('card-type', '1.0.0');
  
        this.code = ''; 
        this.name = ''; 
        this.description = ''; 
        
        this.copy(source);
    }
}