const mongoose = require('mongoose')

const DistributorMasterSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    id: { type: String },
    companyName: { type: String, require: true },
    distributorName: { type: String, require: true },
    mobileNo1: { type: String, require: true },
    mobileNo2: { type: String, require: true },
    fax: { type: String, require: true },
    registerNo: { type: String, require: true },
    email: { type: String, require: true },    
    communicationAddress: {
        city: { type: String },
        country: { type: String },
        lane: { type: String },
        no: { type: String },
        postalCode: { type: String }
    },
    state: { type: String },
    currency: { type: String },
    creditPeriod: { type: Number },
    creditAmount: { type: Number },
    distributorCode: { type: String },
    products: { type: Array },
    areas: { type: Array },
    userId: { type: String },
    userName: { type: String },
    userRole: { type: String }
},
    {
        timestamps: true
    }
)
module.exports = DistributorMaster = mongoose.model('DistributorMaster', DistributorMasterSchema)