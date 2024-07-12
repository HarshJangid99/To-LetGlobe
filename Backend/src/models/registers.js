const mongoose=require('mongoose');
    const employeeschema=new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    }
    
    })


    const Register=new mongoose.model('Register',employeeschema);
    module.exports=Register;





