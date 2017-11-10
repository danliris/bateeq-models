'use strict';

const BaseModel = require('model-toolkit').BaseModel;
const Designer = require('../auth/account');
const ArticleCategory = require('../master/article/article-category');
const ArticleCounter = require('../master/article/article-counter');
const ArticleSeason = require('../master/article/article-season');
const ArticleMaterialComposition = require('../master/article/article-material-composition');
const ArticleSubCounter = require('../master/article/article-sub-counter');
const ArticleMaterial = require('../master/article/article-material');

module.exports = class DesignTrackingDesign extends BaseModel {
    constructor(source) {
        super('design-tracking-design', '1.0.0');

        this.code = '';
        this.name = '';
        this.designerId = {};
        this.designer = new Designer();
        this.articleCategoryId = {};
        this.articleCategory = new ArticleCategory();
        this.articleCounterId = {};
        this.articleCounter = new ArticleCounter();
        this.articleSeasonId = {};
        this.articleSeason = new ArticleSeason();
        this.articleMaterialCompositionId = {};
        this.articleMaterialComposition = new ArticleMaterialComposition();
        this.articleSubCounterId = {};
        this.articleSubCounter = new ArticleSubCounter();
        this.articleMaterialId = {};
        this.articleMaterial = new ArticleMaterial();
        this.closeDate = new Date();
        this.description = '';
        this.reason = '';

        this.copy(source);
    }
};