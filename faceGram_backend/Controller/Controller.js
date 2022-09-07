const User = require('../Models/Models')
module.exports = {

     PostUser: async(req,res)=>{
    try {
        const {fname,lname,username,email,pass,cpass} = req.body;
     
        console.log("checkpoint-1");

     if (
        !fname ||
        !lname ||
        !username||
        !email ||
        !pass ||
        !cpass
      ) {
        res.status(400);
        console.log("checkpoint-2");
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
      console.log("checkpoint-3");
      res.status(200).json(user);
    } catch (error) {
      res.send(error);
    }
}


}