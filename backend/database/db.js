const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/task_UBITC").then(()=>{
    console.log("db connected");
},(err)=>{
    console.log(err);
})