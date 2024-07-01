require('../database/database');
const express = require('express');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');
const nodemailer = require('nodemailer');
const  ejs=require('ejs');
var path=require('path');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'agriideathongasc@gmail.com', 
      pass: 'hsjp qsnh ccto qqge'    
    }
  });

// Models Here!
const school_student_model = require('../models/school_student');
const college_student_model = require('../models/college_student');
const public_model = require('../models/public');


exports.index = async (req, res) => {
    res.render('index.ejs', { title: 'IDEATHON' })
};

exports.rule = async (req, res) => {
    res.render('rule', { title: 'Rule', layout: './layouts/sidebar' })
}

exports.organizing = async (req, res) => {
    res.render('organizing', { title: 'Committee', layout: './layouts/sidebar' })
}

exports.contact = async (req, res) => {
    res.render('contact', { title: 'Contact', layout: './layouts/sidebar' })
}

exports.brochure = async (req, res) => {
    res.render('brochure', { title: 'Brochure', layout: './layouts/sidebar' })
}

exports.gallery = async (req, res) => {
    res.render('gallery', { title: 'Gallery', layout: './layouts/sidebar' })
}


// Register Functions
exports.school_register = async (req, res) => {
    res.render('school_register', { popup:'none',title: 'School Student Registration', layout: './layouts/sidebar' })
}

exports.college_register = async (req, res) => {
    res.render('college_register', { popup:'none',title: 'College Student Registration', layout: './layouts/sidebar' })
}

exports.public_register = async (req, res) => {
    res.render('public_register', { popup:'none',title: 'Public Registration', layout: './layouts/sidebar' })
}


// Form Submit Functions
exports.school_register_submit = async (req, res) => {
    try {
        const school_student_schema = new school_student_model({
            name: req.body.name,
            school: req.body.school,
            dob: req.body.dob,
            gender: req.body.gender,
            standard: req.body.standard,
            phone1:req.body.phone1,
            phone2:req.body.phone2,
            email: req.body.email
        });
        school_student_schema.save()
        .then(() => {
            console.log('Data successfully inserted into MongoDB');
            generateotp(req.body.name,req.body.email);
            res.render('school_register',{
            popup:'display',
            title: 'School Student Registration',
            layout: './layouts/sidebar' });
        })
        .catch(error => {
            console.error('Error inserting data into MongoDB:', error);
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on Submit Data!');
    }
};

exports.college_register_submit = async (req, res) => {
    try {
        const college_student_schema = new college_student_model({
            name: req.body.name,
            rollno: req.body.rollno,
            college:req.body.college,
            department:req.body.department,
            year: req.body.year,
            dob:req.body.dob,
            gender: req.body.gender,
            phone1:req.body.phone1,
            phone2:req.body.phone2,
            email:req.body.email
        })
        
        college_student_schema.save()
        .then(() => {
            console.log('Data successfully inserted into MongoDB');
            generateotp(req.body.name,req.body.email);
            res.render('college_register', {
                popup:'display',
                title: 'College Student Registration',
                layout: './layouts/sidebar'
            });
        })
        .catch(error => {
            console.error('Error inserting data into MongoDB:', error);
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on Submit Data!');
    }
}

exports.public_register_submit = async (req, res) => {
    try {
        const public_schema = new public_model({
            name: req.body.name,
            gender: req.body.gender,
            phone1:req.body.phone1,
            phone2:req.body.phone2,
            aadhar:req.body.aadhar,
            address:req.body.address,
        })
        
        public_schema.save()
        .then(() => {
            console.log('Data successfully inserted into MongoDB');
            generateotp(req.body.name,req.body.email);
            res.render('public_register', {
                popup:'display',
                title: 'Public Registration',
                layout: './layouts/sidebar'
            });
        })
        .catch(error => {
            console.error('Error inserting data into MongoDB:', error);
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error on Submit Data!');
    }
}


// Admin Functions
exports.dashboard = async (req, res) => {
    var no_total_school  = await school_student_model.countDocuments();
    var no_total_college  = await college_student_model.countDocuments();
    var no_total_public  = await public_model.countDocuments();
    var no_total = no_total_school + no_total_college + no_total_public;
    res.render('dashboard', {no_total, title: 'Admin Dashboard', layout: './layouts/admin.ejs' })
}

exports.show_school_students = async (req, res) => {
    try {
        var no_total  = await school_student_model.countDocuments();
        var no_male = await school_student_model.countDocuments({
            gender: "Male",
        });
        var no_female = await school_student_model.countDocuments({
            gender: "Female",
        });
        var no_special = await school_student_model.countDocuments({
            gender: "Special",
        });

        var six = await school_student_model.countDocuments({
            standard: "6th std",
        });
        var seven = await school_student_model.countDocuments({
            standard: "7th std",
        });
        var eigth = await school_student_model.countDocuments({
            standard: "8th std",
        });
        var nine = await school_student_model.countDocuments({
            standard: "9th std",
        });
        var ten = await school_student_model.countDocuments({
            standard: "10th std",
        });
        var eleven = await school_student_model.countDocuments({
            standard: "11th std",
        });
        var twelve = await school_student_model.countDocuments({
            standard: "12th std",
        });
        const data = await school_student_model.find();
        console.log(data);
        res.render('show_school_students', {
            no_total,
            no_male,
            no_female,
            no_special,
            six,
            seven,
            eigth,
            nine,
            ten,
            eleven,
            twelve,
            title: 'School Students List',
            students: data,
            layout: './layouts/admin.ejs' 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

exports.show_college_students = async (req, res) => {
    try {
        var no_total  = await college_student_model.countDocuments();
        var no_male = await college_student_model.countDocuments({
            gender: "Male",
        });
        var no_female = await college_student_model.countDocuments({
            gender: "Female",
        });
        var no_special = await college_student_model.countDocuments({
            gender: "Special",
        });

        var no_first = await college_student_model.countDocuments({
            year: "1st year",
        });
        var no_second = await college_student_model.countDocuments({
            year: "2nd year",
        });
        var no_third = await college_student_model.countDocuments({
            year: "3rd year",
        });
        var no_fourth = await college_student_model.countDocuments({
            year: "4th year",
        });

        const data = await college_student_model.find();
        console.log(data);
        res.render('show_college_students', {
            no_total,
            no_male,
            no_female,
            no_special,
            no_first,
            no_second,
            no_third,
            no_fourth,
            title: 'College Students List',
            students: data,
            layout: './layouts/admin.ejs' });
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
}

exports.show_public = async (req, res) => {
    try {
        var no_total  = await public_model.countDocuments();
        var no_male = await public_model.countDocuments({
            gender: "Male",
        });
        var no_female = await public_model.countDocuments({
            gender: "Female",
        });
        var no_special = await public_model.countDocuments({
            gender: "Special",
        });

        const data = await public_model.find();
        console.log(data);
        res.render('show_public', {
            no_total,
            no_male,
            no_female,
            no_special,
            title: 'Public List',
            students: data,
            layout: './layouts/admin.ejs' });
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
}





async function generateotp(uname,email)
{
    ejs.renderFile(path.join(__dirname,'../','../','public','mail','mail.ejs'),{name:uname},function(err,data){
        var mailOptions={
            from: 'agriideathongasc@gmail.com',    // Sender's email address
            to:email,
            subject:'Registration Success',
            //html:{path:'public/index.html'}
          html:data
        };
        
        transporter.sendMail(mailOptions,function(error,info){
            if(error){
                console.log(error);
            }
            else{
                console.log('email sent:'+info.response);
            }
        });
    })
}