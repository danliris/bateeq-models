'use strict'

var Item = require('./item');

module.exports = class FinishedGoods extends Item {
    constructor(source) {
        super(source, '1.0.0', 'finished-goods');

        // Define properties.
        this.articleId = {};
        this.article = {};
        this.size = '';
        this.imagePath = '';
        this.motifPath = '';
        this.colorCode = '';
        this.colorDoc = {};
        this.motifDoc = {};
        this.realizationOrderName = '';
        this.processDoc = {};
        this.materialDoc = {};
        this.materialCompositionDoc = {};
        this.collectionDoc = {};
        this.seasonDoc = {};
        this.counterDoc = {};
        this.styleDoc = {};
        this.domesticCOGS = 0;
        this.domesticWholesale = 0;
        this.domesticRetail = 0;
        this.domesticSale = 0;
        this.internationalCOGS = 0;
        this.internationalWholesale = 0;
        this.internationalRetail = 0;
        this.internationalSale = 0;

        this.copy(source);
    }
}