const router = require('express').Router();
const employee = require('../models/employee');
router.post('/',(req,res)=>{
    const employeeCode = req.body.employeeCode;
    employee.findOne({employeeCode:employeeCode}).then(employee => {
        console.log(employee);
        if(employee!=null&&employee.password===req.body.password)res.json(employee);
        else res.json('login details wrong');
    }).catch(err=>console.log(err));

});
module.exports = router; 