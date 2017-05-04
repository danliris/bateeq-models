'use strict'

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class ExpeditionService extends BaseModel {
    constructor(source) {
        super('expedition-service', '1.0.0');
   
        this.code = ''; 
        this.name = ''; 
        this.description = ''; 
        
        this.copy(source);
    }
}