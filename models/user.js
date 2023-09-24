const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true
        },
        address:{
            type:String,
            require:true
        },
        class:{
            type:String,
            require:true
        },
        phone_number:{
            type:String
        },
        image:{
            type:String,
            require:true
        ,
        
},
});

const User = mongoose.model("userDetail",userSchema);
module.exports=User;