const models  = require('../models');
 

const registerEmployee =  (req, res, next) => {
    console.log(req.body);
    const newEmployee = new models.employee(req.body);
    newEmployee.save().then(user => res.json(user)).catch(err=>console.log(err)); 
}
const addSalary =  (req, res, next) => {
    const newSalary = new models.salary(req.body);
    newSalary.save().then(user => res.send({
            success:1
        })).catch(err => res.send({
            success:0
        }))
}


const loginAdmin =  (req, res, next) => {
    //give Admin token => for all the things to show ot admin panel 
    const employeeCode = req.body.employeeCode;
    models.employee.findOne({employeeCode:employeeCode}).then(employee => {
        console.log(employee);
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
    if(req.body.punchIn){
        const attend = new models.attendance(req.body);
        attend.save().then(user => res.send({
            success:1
        })).catch(err => res.send({
            success:0
        }))
    }
    else {
        models.attendance.findOneAndUpdate(
            {employeeCode:req.body.employeeCode,date:req.body.date},
            {punchOut:req.body.punchOut},
            {new: true}
        ).then(user => res.send({
            success:1
        })).catch(err => res.send({
            success:0
        }))
   }
   
    
}
const leaveRequest  =  (req, res, next) => {

}
const loanRequest  =  (req, res, next) => {
    
}
const benefitRequest  =  (req, res, next) => {
    
}
module.exports = {
    registerEmployee,
    addSalary,
    getEmployee,
    punchInEmployee,
    leaveRequest,
    loanRequest,
    benefitRequest
}