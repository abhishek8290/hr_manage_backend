const mongo =require('mongoose');
const leave_schema =mongo.Schema({
    'employeeCode': String,
    'absenceType' : String,
    'fromDate' : Date,
    'toDate' : Date,
    'status': String,
    'note' : String,
});
const leave = mongo.model('attendace', leave_schema);
module.exports = leave;