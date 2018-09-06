var validate = require('../src/validator').inventory;

it("#01. InventoryMovement should valid", function () {
    var InventoryMovement = require('../src/inventory/inventory-movement');
    validate.inventoryMovement(new InventoryMovement());
});

it("#02. Inventory should valid", function () {
    var Inventory = require('../src/inventory/inventory');
    validate.inventory(new Inventory());
});

it("#03. TransferInDoc should valid", function () {
    var TransferInDoc = require('../src/inventory/transfer-in-doc');
    validate.transferInDoc(new TransferInDoc());
});

it("#04. TransferOutDoc should valid", function () {
    var TransferOutDoc = require('../src/inventory/transfer-out-doc');
    validate.transferOutDoc(new TransferOutDoc());
});

it("#05. ExpeditionDoc should valid", function () {
    var ExpeditionDoc = require('../src/inventory/expedition-doc');
    validate.expeditionDoc(new ExpeditionDoc());
});

it("#06. AdjusmentDoc should valid", function () {
    var AdjusmentDoc = require('../src/inventory/adjustment-doc');
    validate.adjustmentDoc(new AdjusmentDoc());
});

it("#07. Stock Opname Document should valid", function () {
    var StockOpname = require('../src/inventory/stock-opname-doc');
    validate.stockOpnameDoc(new StockOpname());
});

it("#08. movement-inventory should valid", function () {
    var MovementInventory = require('../src/inventory/movement-inventory');
    validate.movementInventory(new MovementInventory());
});

it("#09. summary-inventory should valid", function () {
    var SummaryInventory = require('../src/inventory/summary-inventory');
    validate.summaryInventory(new SummaryInventory());
});

it("#10. document inventory should valid", function () {
    var DocumentInventory = require('../src/inventory/document-inventory');
    validate.documentInventory(new DocumentInventory());
});

it("#11.(2) document inventory should valid", function () {
    var DocumentInventoryItem = require('../src/inventory/document-inventory-item');
    validate.documentInventoryItem(new DocumentInventoryItem());
});