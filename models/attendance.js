const mongo =require('mongoose');
const attendance_schema =mongo.Schema({
    employeeCode:{
        type:String,
        required:true
    },
    day:{
        type: String,
        required:true
    },
    punchIn:{
        type: Date,
       
    },
    punchOut:{
        type: Date,
        
    }
});
const attendance = mongo.model('attendace', attendance_schema);
module.exports = attendance;