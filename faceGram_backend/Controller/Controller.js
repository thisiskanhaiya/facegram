const User = require("../Models/Models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Add = require("../Models/Groups");
const { json } = require("express");
module.exports = {
  PostUser: async (req, res) => {
    const { fname, lname, username, email, pass, cpass } = req.body;

    if (!fname || !lname || !username || !email || !pass || !cpass) {
      return res.status(421).json({ error: "All Field are required" });
    }
    try {
      const userExist = await User.findOne({ email: email }); //checking if user exists already

      if (userExist) {
        res.status(422).json({ error: "User already exist" });
      } else if (pass !== cpass) {
        res.status(423).json({ error: "Passwords doesnot match correctly" });
      } else {
        const registered_user = new User({
          fname,
          lname,
          username,
          email,
          pass,
          cpass,
        }); //make user object

        await registered_user.save();
        res.status(400);
      }
    } catch (error) {
      res.status(404).send(error);
    }
  },

  // --------------------------------- login route function --------------------------

  Login: async (req, res) => {
    try {
      const { email, pass } = req.body;
      // if (!email || !pass) {
      //   res.status(421).json({ error: "Plz Filled the data" });
      // }
      const userLogin = await User.findOne({ email: email });

      if (userLogin) {
        const isMatch = await bcrypt.compare(pass, userLogin.pass);

        if (!isMatch) {
          res.status(400).json({ error: "Invalid Credential" });
        } else {
          let token = jwt.sign(req.body, "this is secret key for jwt", {
            expiresIn: "1h",
          });
          userLogin.tokens = await userLogin.tokens.concat({ token: token });
          await userLogin.save();
          res.status(200).json({ message: "user signin successfully" });
        }
      } else {
        res.status(404).json({ error: "Invalid Credential" });
      }
    } catch (err) {
      res.status(400).send("error");
    }
  },

  // ----------------------- Adding new Group ---------------------------

  Add: async (req, res) => {
    const { name, category, description } = req.body;
    try {

      if(!name||!category||!description){
        res.status(404).json({ error: "Group is already exist" });
      }else 
      {   
        const grpExist = await Add.findOne({ name: name });
        if (grpExist) {
          res.status(422).json({ error: "Group is already exist" });
        } else {
          const group = new Add({  
            name:name,
            category:category,
            description:description
          });
  
          await group.save();          
          res.status(200).json({ message: "Group Added successfully" });
        }
      }
    } catch (error) {
      res.status(422).json({ error: "Something Went Wrong" });
    }
  },
  // -------------------------- getting added group info -----------------------

  Groups:async function(req,res){

    try {
      const result = await Add.find();
      res.status(201).json({ data: result });
    } catch (err) {
      res.status(422).json({ error: "Something Went Wrong" });
    }
  }

};
