const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sajna:sajna123naufal@cluster0.qyq3rar.mongodb.net/?retryWrites=true&w=majority")

.then(()=>{
    console.log('connected to DB');
})
.catch(()=>{
    console.log('Connection lost');
})