var validate = require('../src/validator').master;

it("#01. Item should valid", function () {
    var Item = require('../src/master/item');
    validate.item(new Item());
})

it("#02. FinishedGoods should valid", function () {
    var FinishedGoods = require('../src/master/finished-goods');
    validate.finishedGoods(new FinishedGoods());
})

it("#03. Material should valid", function () {
    var Material = require('../src/master/material');
    validate.material(new Material());
})

it("#04. Component should valid", function () {
    var Component = require('../src/master/component');
    validate.component(new Component());
})

it("#05. Bank should valid", function () {
    var Bank = require('../src/master/bank');
    validate.bank(new Bank());
})

it("#06. CardType should valid", function () {
    var CardType = require('../src/master/card-type');
    validate.cardType(new CardType());
})

it("#07. Store should valid", function () {
    var Store = require('../src/master/store');
    validate.store(new Store());
})

it("#08. StoreShift should valid", function () {
    var StoreShift = require('../src/master/store-shift');
    validate.storeShift(new StoreShift());
})

it("#09. Module should valid", function () {
    var Module = require('../src/master/module');
    validate.module(new Module());
})

it("#10. Supplier should valid", function () {
    var Supplier = require('../src/master/supplier');
    validate.supplier(new Supplier());
})

it("#11. Storage should valid", function () {
    var Storage = require('../src/master/storage');
    validate.storage(new Storage());
})

it("#12. Division should valid", function () {
    var Division = require('../src/master/division');
    validate.division(new Division());
})

it("#13. Unit should valid", function () {
    var Division = require('../src/master/unit');
    validate.division(new Division());
})

it("#14. Colour should valid", function () {
    var Colour = require('../src/master/colour');
    validate.colour(new Colour());
})

it("#15. Expedition Service should valid", function () {
    var ExpeditionService = require('../src/master/expedition-service');
    validate.colour(new ExpeditionService());
})

it("#16. Range Disc Product should valid", function () {
    var RangeDiscProduct = require('../src/master/range-disc-product');
    validate.rangeDiscProduct(new RangeDiscProduct());
})