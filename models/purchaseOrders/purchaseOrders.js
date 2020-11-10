const mongoose = require('mongoose')

const PurchaseOrdersSchema = new mongoose.Schema({
    date: { type: Date },
    id: { type: String, require: true },
    supplierId: { type: String, require: true },
    userId: { type: String },    
    rawMaterials: { type: Array },
    packingMaterials: { type: Array }    
},
    {
        timestamps: true
    }
)
module.exports = PurchaseOrders = mongoose.model('PurchaseOrders', PurchaseOrdersSchema)