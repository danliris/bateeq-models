var validate = require('../src/validator').sales;

it("#01. SalesDoc should valid", function(){
    var SalesDoc = require('../src/sales/sales-doc');
    validate.salesDoc(new SalesDoc());
}) 
 
it("#02. Reward Type should valid", function(){
    var RewardType = require('../src/sales/reward-type');
    validate.rewardType(new RewardType());
})

it("#03. Promo should valid", function(){
    var Promo = require('../src/sales/promo');
    validate.promo(new Promo());
})

it("#04. PromoCriteria should valid", function(){
    var PromoCriteria = require('../src/sales/promo-criteria');
    validate.promoCriteria(new PromoCriteria());
})

it("#05. PromoReward should valid", function(){
    var PromoReward = require('../src/sales/promo-reward');
    validate.promoReward(new PromoReward());
})

it("#06. PromoCriteriaSelectedProduct should valid", function(){
    var PromoCriteriaSelectedProduct = require('../src/sales/promo-criteria-selected-product');
    validate.promoCriteriaSelectedProduct(new PromoCriteriaSelectedProduct());
})

it("#07. PromoRewardDiscountProduct should valid", function(){
    var PromoRewardDiscountProduct = require('../src/sales/promo-reward-discount-product');
    validate.promoRewardDiscountProduct(new PromoRewardDiscountProduct());
})

