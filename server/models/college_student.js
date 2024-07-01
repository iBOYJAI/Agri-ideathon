const mongoose = require('mongoose');

const college_student_schema = new mongoose.Schema({
    name: {
        type: String
    },
    rollno: {
        type: String
    },
    college: {
        type: String
    },
    department: {
        type: String
    },
    year: {
        type: String
    },
    dob: {
        type: String
    },
    gender: {
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
}
);

const college_student_model = mongoose.model('college_student', college_student_schema);

module.exports = college_student_model;