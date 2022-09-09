const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        username: String,
        email: String,
        pass:String,
        cpass:String,
        tokens:[
            {
                token:{
                    type:String,
                    required:true
                }
            }
        ]
    }
);

// --------------------- encrypting password ---------------

UserSchema.pre('save',async function(next){
    
    if(this.isModified('pass')){
        this.pass= await bcrypt.hash(this.pass,12);
        this.cpass= await bcrypt.hash(this.cpass,12);
    }
    next();

});

// ------------------ generating jwt token -------------

UserSchema.methods.generateAuthtoken = async function (){
    try{
        let token = jwt.sign(req.body, 'this is secret key for jwt', { expiresIn: '1h' });
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch (err){
        console.log(err);
    }
}



module.exports=mongoose.model('User', UserSchema);