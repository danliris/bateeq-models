module.exports = {
    auth: {
        type: {
            Account: 'account',
            Profile: 'profile',
            Role: 'role'
        },
        collection: {
            Account: 'accounts',
            Role: 'roles'
        }
    },
    inventory: {
        master: {
            Discount: 'discounts'
        },
        StockIn: 'stock-ins',
        StockOut: 'stock-outs',
        Inventory: 'inventories',
        InventoryMovement: 'inventory-movements',
        TransferInDoc: 'transfer-in-docs',
        TransferOutDoc: 'transfer-out-docs',
        FinishedGoodsDoc: 'finished-goods-docs',
        ExpeditionDoc: 'expedition-docs',
        AdjustmentDoc: 'adjustment-docs',
        StockOpnameDoc: 'stock-opname-docs',
        InventoryDocument: "inventory-documents",
        InventorySummary: "inventory-summaries",
        DocumentInventory : "documents-inventory",
        MovementInventory : "movements-inventory",
        SummaryInventory : "summaries-inventory"
    },
    manufacture: {
        Finishing: 'finishings',
        CostCalculationDocument: 'cost-calculation-documents',
        FabricConsumptionDocument: 'fabric-consumption-documents',
        DesignTrackingBoard: 'design-tracking-boards',
        DesignTrackingStage: 'design-tracking-stages',
        DesignTrackingDesign: 'design-tracking-designs',
        DesignTrackingActivity: 'design-tracking-activities'
    },
    master: {
        Item: 'items',
        FinishedGoods: 'items',
        Material: 'items',
        article: {
            ArticleApproval: 'article-approvals',
            ArticleBrand: 'article-brands',
            ArticleCategory: 'article-categories',
            ArticleColor: 'article-colors',
            ArticleCostCalculationDetail: 'article-cost-calculation-details',
            ArticleCostCalculation: 'article-cost-calculations',
            ArticleCounter: 'article-counters',
            ArticleMaterial: 'article-materials',
            ArticleMotif: 'article-motifs',
            ArticleOrigin: 'article-origins',
            ArticleSeason: 'article-seasons',
            ArticleSize: 'article-sub-sizes',
            ArticleSubCounter: 'article-sub-counters',
            ArticleTheme: 'article-themes',
            ArticleType: 'article-types',
            ArticleVariant: 'article-variants',
            Article: 'articles',
            ArticleSeason: 'article-seasons',
            ArticleProcess: 'article-process',
            ArticleSubProcess: 'article-sub-process',
            ArticleCollection: 'article-collections',
            ArticleSubCollection: 'article-sub-collections',
            ArticleMaterialComposition: 'article-material-compositions',
            ArticleSubMaterialComposition: 'article-sub-material-compositions',
        },
        Module: 'modules',
        Bank: 'banks',
        CardType: 'card-types',
        Store: 'stores',
        Storage: 'storages',
        Supplier: 'suppliers',
        StoreShift: 'store-shifts',
        Division: 'division',
        Unit: 'unit',
        Colour: 'colours',
        collection: {
            Division: 'divisions',
            Unit: 'units',
            Colour: 'colours'
        },
        ExpeditionService: 'expedition-services',
        RangeDiscProduct: 'range-disc-products',
        DesignTrackingReason: 'design-tracking-reasons',
        Budget: 'budgets',
        Category: 'categories',
        Currency: 'currencies',
        Uom: 'unit-of-measurements',
        Product: 'products',
        Buyer: 'buyers',
        Vat: 'vats'
    },
    merchandiser: {
        SPKDoc: 'spk-docs'
    },
    sales: {
        SalesDoc: 'sales-docs',
        SalesReturnDoc: 'sales-return-docs',
        Promo: 'promos'
    },
    purchasing: {
        PurchaseRequest: 'purchase-requests',
        PurchaseOrder: 'purchase-order',
        PurchaseOrderExternal: 'purchase-order-externals',
        DeliveryOrder: 'delivery-orders',
        UnitPaymentOrder: 'unit-payment-orders',
        UnitReceiptNote: 'unit-receipt-notes',
        UnitPaymentCorrectionNote: 'unit-payment-correction-notes'
    }
};