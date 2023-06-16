const mongoose = require('mongoose');
mongoose.connect(process.env.mongodb_url)
.then(()=>{
    console.log('connected to my local DB');
})
.catch(()=>{
    console.log('Error!!!Connection lost');
})