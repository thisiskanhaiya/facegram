const User = require('../Models/Models')
module.exports = {

     PostUser: async(req,res)=>{
    try {
        const {fname,lname,username,email,pass,cpass} = req.body;
     
     if (
        !fname ||
        !lname ||
        !username||
        !email ||
        !pass ||
        !cpass
      ) {
        res.status(400);
        throw new Error("Please add all fields");
      }
      const user = await User.create({
        fname,
        lname,
        username,
        email,
        pass,
        cpass
        
      });
      res.status(200).json(user);
    } catch (error) {
      res.send(error);
    }
}


}