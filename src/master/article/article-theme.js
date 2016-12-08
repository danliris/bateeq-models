'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class ArticleTheme extends BaseModel {
    constructor(source) {
        super('article-theme', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';

        this.copy(source);
    }
}