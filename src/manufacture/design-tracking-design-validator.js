require("should");
const validateDesigner = require('../auth/account-validator');
const validateArticleCategory = require('../master/article/article-category-validator');
const validateArticleSeason = require('../master/article/article-season-validator');
const validateArticleMaterialComposition = require('../master/article/article-material-composition-validator');
const validateArticleSubCounter = require('../master/article/article-sub-counter-validator');
const validateArticleMaterial = require('../master/article/article-material-validator');

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceOf(String);

    data.should.have.property('name');
    data.name.should.instanceOf(String);

    data.should.have.property('designerId');
    data.designerId.should.instanceof(Object);

    data.should.have.property('designer');
    data.designer.should.instanceof(Object);
    validateDesigner(data.designer);

    data.should.have.property('articleCategoryId');
    data.articleCategoryId.should.instanceof(Object);

    data.should.have.property('articleCategory');
    data.articleCategory.should.instanceof(Object);
    validateArticleCategory(data.articleCategory);

    data.should.have.property('articleSeasonId');
    data.articleSeasonId.should.instanceof(Object);

    data.should.have.property('articleSeason');
    data.articleSeason.should.instanceof(Object);
    validateArticleSeason(data.articleSeason);

    data.should.have.property('articleMaterialCompositionId');
    data.articleMaterialCompositionId.should.instanceof(Object);

    data.should.have.property('articleMaterialComposition');
    data.articleMaterialComposition.should.instanceof(Object);
    validateArticleMaterialComposition(data.articleMaterialComposition);

    data.should.have.property('articleSubCounterId');
    data.articleSubCounterId.should.instanceof(Object);

    data.should.have.property('articleSubCounter');
    data.articleSubCounter.should.instanceof(Object);
    validateArticleSubCounter(data.articleSubCounter);

    data.should.have.property('articleMaterialId');
    data.articleMaterialId.should.instanceof(Object);

    data.should.have.property('articleMaterial');
    data.articleMaterial.should.instanceof(Object);
    validateArticleMaterial(data.articleMaterial);

    data.should.have.property('closeDate');
    data.closeDate.should.instanceOf(Date);

    data.should.have.property('description');
    data.description.should.instanceOf(String);
};