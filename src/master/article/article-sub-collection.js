'use strict'

var BaseModel = require('model-toolkit').BaseModel; 

module.exports = class ArticleSubCollection extends BaseModel {
    constructor(source) {
        super('article-sub-collection', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}