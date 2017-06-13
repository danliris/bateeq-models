require("should");

var validateArticleSubMaterialComposition = require("./article-sub-material-composition-validator");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String);

    data.should.have.property('name');
    data.name.should.instanceof(String);

    data.should.have.property('description');
    data.description.should.instanceof(String);

    data.should.have.property('subMaterialCompositions');
    data.subMaterialCompositions.should.instanceof(Array);

    for (var sub of data.subMaterialCompositions) {
        validateArticleSubMaterialComposition(sub);
    }
};