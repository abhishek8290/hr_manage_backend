const mongo =require('mongoose');
const user_schema =mongo.Schema({
  
    'employeeID' : String,
    'moneyType' : String, //currency
    'taxes' : Int32Array,
    'deductions' : Int32Array,
    'payRate' : Int32Array, 
    'payType' : String,

});
const user = mongo.model('users', user_schema);
module.exports = user;