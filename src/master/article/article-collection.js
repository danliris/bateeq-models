'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class ArticleCollection extends BaseModel {
    constructor(source) {
        super('article-collection', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.subCollections = [];

        this.copy(source);
    }
}