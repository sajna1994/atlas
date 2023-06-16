const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const employeeData=require('../model/EmployeelistData')
// Get operation
router.get('/employeelist',async(req,res)=>{
    try {
        const data=await employeeData.find();
        res.status(200).json(data);
        } catch (error) {
        res.status(400).json('cannot get');
    }
})
// post Operation
router.post('/addemployeelist',async(req,res)=>{
try {
    const item=req.body;
    const newdata=new employeeData(item);
    const savedData=await newdata.save();
    res.status(200).json('post successful');
} catch (error) {
   res.status(400).json('No post');
}
})
//update operation
router.put('/employeelist:id',async(req,res)=>{
    try {
        let id =req.params.id;
        console.log('id checked',id)
        let updateData ={$set:req.body}
        const updated =await employeeData.findByIdAndUpdate(id,updateData)
        res.json(updated)
    } catch (error) {
        console.log(error);
        res.send('error')
    }
})
//delete operation
router.delete('/employeelist:id',async(req,res)=>{
    try {
        let id =req.params.id;
        console.log('id checked',id)
        let updateData ={$set:req.body}
        const updated =await employeeData.findByIdAndDelete(id)
        res.json("deleted")
    } catch (error) {
        console.log(error);
        res.send('error')
    }
})




module.exports=router;