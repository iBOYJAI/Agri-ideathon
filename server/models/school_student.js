const mongoose = require('mongoose');

const school_student_schema = new mongoose.Schema({
    name: {
        type: String
    },
    school: {
        type: String
    },
    dob: {
        type: String
    },
    gender: {
        type: String
    },
    standard: {
        type: String
    },
    phone1: {
        type: String
    },
    phone2: {
        type: String
    },
    email: {
        type: String
    },
    registered_date: { 
        type: Date, 
        default: Date.now 
    }
});

const school_student_model = mongoose.model('school_student', school_student_schema);

module.exports = school_student_model;