const mongoose = require('mongoose');

const dataRecordSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: {
        type: String,
        required: true,
        enum: ['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports']
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Completed', 'Cancelled']
    },
    revenue: {
        type: Number,
        required: true
    },
    sales: {
        type: Number,
        required: true
    },
    productsSold: {
        type: Number,
        required: true
    },
    profit: {
        type: Number,
        required: true
    },
    customers: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const DataRecord = mongoose.model('DataRecord', dataRecordSchema);
module.exports = DataRecord;
