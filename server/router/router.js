const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');

// universal
router.get('/',controller.index);

router.get('/rule',controller.rule);
router.get('/organizing',controller.organizing);
router.get('/contact',controller.contact);
router.get('/college_register',controller.college_register);
router.get('/school_register',controller.school_register);
router.get('/public_register',controller.public_register);
router.get('/brochure',controller.brochure);
router.get('/gallery',controller.gallery);

router.post('/college_register_submit',controller.college_register_submit);
router.post('/school_register_submit',controller.school_register_submit);
router.post('/public_register_submit',controller.public_register_submit);

router.get('/admin_dashboard_2468',controller.dashboard);
router.get('/admin_2468_show_school_students',controller.show_school_students);
router.get('/admin_2468_show_college_students',controller.show_college_students);
router.get('/admin_2468_show_public',controller.show_public);

module.exports = router;