const mongoose = require('mongoose');

const public_schema = new mongoose.Schema({
    name: {
        type: String
    },
    phone1: {
        type: String
    },
    phone2: {
        type: String
    },
    aadhar: {
        type: String
    },
    address: {
        type: String
    },
    gender: {
        type: String
    },
    registered_date: { 
        type: Date, 
        default: Date.now 
    }
}
);

const public_model = mongoose.model('public', public_schema);

module.exports = public_model;