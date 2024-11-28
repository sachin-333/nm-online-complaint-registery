const mongoose =  require("mongoose")

mongoose.connect("mongodb+srv://sachinanandharaj:aww0LIvhmTUIef9M@cluster0.tcslr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then(()=>{
   console.log("connected to mongodb")
})
