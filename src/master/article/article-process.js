'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class ArticleProsess extends BaseModel {
    constructor(source) {
        super('article-prosess', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.subProsess = [];

        this.copy(source);
    }
}