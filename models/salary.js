const mongo =require('mongoose');
const deduction_schema = mongo.Schema({
    
    providentFund:{
        type: Number,
        required:true
    },
    professionalTax:{
        type: Number,
        required:true
    }
    
});
const salary_schema =mongo.Schema({
    employeeCode:{
        type:String,
        required:true
    },
    basic:{
        type: Number,
        required:true
    },
    hra:{
        type: Number,
        required:true
    },
    health:{
        type: Number,
        required:true
    },
    professionalDevelopment:{
        type: Number,
        required:true
    },
    otherAllowance:{
        type: Number,
        required:true
    },
    deduction:[deduction_schema]
});
const salary = mongo.model('salary', salary_schema);
module.exports = salary;