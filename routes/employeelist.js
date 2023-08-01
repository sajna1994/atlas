const router = require('express').Router();
const employeeDATA = require('../model/EmployeelistData')
router.get('/employeelist',async(req,res)=>{
    try {
        let data = await employeeDATA.find()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})
router.get('/employeelist/:id',async(req,res)=>{
    try {
        let id = req.params.id
        let data = await employeeDATA.findById(id)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})
router.post('/addemployeelist',async(req,res)=>{
    try {
        console.log(req.body)
        const { name, location, position ,salary } = req.body;
        const employee = await employeeDATA({ name, location, position, salary });
        employee.save()  
        res.json('success')
    } catch (error) {
        console.log(error)
        res.json('error')
    }
})
router.put('/employeelist',async(req,res)=>{
    try {
       id = req.body._id
       let updateData = {$set:req.body}
       const updated = await employeeDATA.findByIdAndUpdate(id, updateData)
        res.json('updated new')
    } catch (error) {
        // console.log(error)
        res.send('error')
    }
})
router.delete('/employeelist/:id',async(req,res)=>{
    try {
        let id = req.params.id
       const updated = await employeeDATA.findByIdAndDelete(id)
        res.json('deleted')
    } catch (error) {
        console.log(error)
        res.send('error')
    }
})
module.exports = router