'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class ArticleMaterialComposition extends BaseModel {
    constructor(source) {
        super('article-material-composition', '1.0.0');

        // Define properties.
        this.code = '';
        this.name = '';
        this.description = '';
        
        this.subMaterialCompositions = [];

        this.copy(source);
    }
}