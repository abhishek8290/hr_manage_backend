const models  = require('../models');
 

const registerEmployee =  (req, res, next) => {
    console.log(req.body);
    const newEmployee = new models.employee(req.body);
    newEmployee.save().then(user => res.json(user)).catch(err=>console.log(err)); 
}


const loginEmployee =  (req, res, next) => {
    const employeeCode = req.body.employeeCode;
    models.employee.findOne({employeeCode:employeeCode}).then(employee => {
        if(employee!=null&&employee.password===req.body.password)res.json(employee);
        else res.json('login details wrong');
    }).catch(err=>console.log(err));
}
const getEmployee =  (req, res, next) => {
    const employeeCode = req.body.employeeCode;
    models.employee.findOne({employeeCode:employeeCode}).then(employee => {
        res.json(employee);
    }).catch(err=>console.log(err));
}
const punchInEmployee =  (req, res, next) => {
    const employeeCode = req.body.employeeCode;
    console.log(req.body);
    if(req.body.punchIntype=='1'){
        console.log('yaha aaya ')
        const attend = new models.attendance(req.body);
        attend.save().then(user =>{
            console.log(user)
            res.send({
                success:1
            })
        } ).catch(err => {
            console.log(err);
            res.send({
                success:0
            })
        })
    }
    else {
        models.attendance.findOneAndUpdate(
            {employeeCode:req.body.employeeCode,day:req.body.day},
            {punchOut:req.body.punchOut},
            {new: true}
        ).then(user =>{
            console.log(user)
            res.send({
                success:1
            })
        } ).catch(err => {
            console.log(err)
            res.send({
                success:0
            })
        })
   }
   
    
}
const getAttendance =  (req, res, next) => {
    models.attendance.findOne(req.body).then(employee => {
        res.json(employee);
    }).catch(err=>console.log(err));
}
const leaveRequest  =  (req, res, next) => {

}
const loanRequest  =  (req, res, next) => {
    
}
const benefitRequest  =  (req, res, next) => {
    
}
module.exports = {
    registerEmployee,
    loginEmployee,
    getEmployee,
    punchInEmployee,
    leaveRequest,
    loanRequest,
    benefitRequest,
    getAttendance
}
/*
 employeeCode: '7@gmail.com',
  day: '2021/1/24',


*/