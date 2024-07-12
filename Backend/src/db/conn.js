const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://pratishtha09092:test123@cluster0.4ewt2je.mongodb.net/DATA?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(e);
})



