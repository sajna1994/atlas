const mongoose = require('mongoose');
const employeelistSchema = mongoose.Schema({
  
    employeeName:String,
    location:String,
    position:Number,
    salary:Number
});
const EmployeelistData=mongoose.model('employeelist',employeelistSchema);
module.exports=EmployeelistData;