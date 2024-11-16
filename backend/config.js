const mongoose = require("mongoose")

mongoose.connect("mongodb://27.60.175.95/details")
.then(()=>{
   console.log("connected to mongodb")
})