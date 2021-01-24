const router = require('express').Router();
const controller  = require('./../controller/employeeController');


router.post('/register', controller.registerEmployee);
router.post('/login',controller.loginEmployee);
router.get('/getDetails',controller.getEmployee);
router.post('/attendance',controller.punchInEmployee);
router.post('/leaveRequest',controller.leaveRequest);
router.post('/loanRequest',controller.loanRequest);
router.post('/benefitRequest',controller.benefitRequest);
router.get('/getAttendance',controller.getAttendance);



module.exports = router;

