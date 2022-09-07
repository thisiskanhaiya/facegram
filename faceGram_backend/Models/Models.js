const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        username: String,
        email: String,
        pass:String,
        cpass:String
    }
);
module.exports=mongoose.model('User', UserSchema);