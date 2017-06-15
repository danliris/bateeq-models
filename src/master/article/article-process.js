'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class ArticleProcess extends BaseModel {
    constructor(source) {
        super('article-process', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.subProcess = [];

        this.copy(source);
    }
}