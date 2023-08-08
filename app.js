// Task1: initiate app and run server at 3000
const express=require('express');
const app = express(); 
const PORT = 3000;
const log= require('morgan');
app.use(log('dev'))
require('./db/mongodb')


const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const employeeRouter = require('./routes/employeelist')
app.use('/api',employeeRouter)

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'




//TODO: get single data from db  using api '/api/employeelist/:id'





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
});
// Task1: initiate app and run server at 3000
