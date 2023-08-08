const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://SajnaTT:Saju123naufal@cluster0.sut9o9a.mongodb.net/?retryWrites=true&w=majority")

.then(()=>{
    console.log('connected to DB');
})
.catch(()=>{
    console.log('Connection lost');
})