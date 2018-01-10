require("should");

module.exports = function (data) {
    data.should.have.property('unit');
    data.unit.should.be.String();
};