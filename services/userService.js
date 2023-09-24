var userDetails = require("../models/user");

exports.userCreate = async function (req) {
    try {
        var createUser = new userDetails({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            class: req.body.class,
            phone_number: req.body.phone_number,
            image: req.body.image
        });
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(req.body.email)) {
            throw Error("Invalid email address");
        }
        const mobileExist = await userDetails.findOne({ phone_number: req.body.phone_number })
        if (mobileExist) {
            throw Error("Mobile Number already Exists")
        }

        const emailExist = await userDetails.findOne({email:req.body.email});
        if(emailExist){
            throw Error("Email already Exists")
        }
        const saveUser = await createUser.save();
        return {
            userDetails: saveUser
        }
    } catch (e) {
        throw Error(e);
    }
}

exports.userGet = async function (req) {
    try {
        
        const getUserDetails = await userDetails.find({  })
       
        return {
            userDetails: getUserDetails
        }
    } catch (e) {
        throw Error(e);
    }
}

exports.userupdates = async function (req) {
    try {
        const userId = req.params.id; 
        
        const updatedData = {
            name: req.body.name,
            email:req.body.email,
            address: req.body.address,
            class:req.body.class,
            phone_number:req.body.phone_number,
            image:req.body.image
            
        };

        
        const updatedUserDetails = await userDetails.findByIdAndUpdate(
            userId,
            updatedData,
            { new: true } // To get the updated document as the result
        );

        if (!updatedUserDetails) {
            throw Error("User not found");
        }

        return {
            userDetails: updatedUserDetails
        };
    } catch (e) {
        
        return {
            error: e.message // or a custom error message
        };
    }
}


exports.userDeletes = async function (req) {
    try {
        const userId = req.params.id; 
        

        
        const deletedUserDetails = await userDetails.deleteOne({_id:userId});

        return {
            userDetails: deletedUserDetails
        };
    } catch (e) {
        
        return {
            error: e.message 
        };
    }
}

exports.userGetDetails = async function (req) {
    try {
        const userId = req.params.id; 
        
        const getUserDetails = await userDetails.find({_id:userId});

        return {
            userDetails: getUserDetails
        };
    } catch (e) {
        
        return {
            error: e.message 
        };
    }
}







