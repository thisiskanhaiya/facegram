const User = require("../Models/Models");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const Add = require("../Models/Groups");
const { json } = require("express");

// const createToken = async() => {
//   const token = await jwt.sign({_id:"631a0fc32c809735c9d01424"},"this is secret key for jwt this is secret key for jwt",{
//     expiresIn:"1h"
//   });
//   console.log(token);
//   const userVer = await jwt.verify(token,"this is secret key for jwt this is secret key for jwt");
//   console.log(userVer);
// }
// createToken();

module.exports = {
  // -----------------------------Register new user -----------------------------

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
        });

        // -------------middleware--------------
        const token = await registered_user.generateAuthToken();
        console.log("getting token back",token);
        res.cookie("jwt", token, {
          expires:new Date(Date.now() + 300000),
          httpOnly: true,
        });
      
        const reg = await registered_user.save();
        console.log(reg);
        res.sendStatus(200);
      }
    } catch (error) {
      res.status(404).send(error);
    }
  },

  // --------------------------------- login route function --------------------------

  Login: async (req, res) => {
    try {
      const { email, pass } = req.body;
      const userLogin = await User.findOne({ email: email });
      const isMatch = await bcrypt.compare(pass, userLogin.pass);
      if (isMatch) {
        let token = await userLogin.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 5184000),
          httpOnly: true,
        });
        res.status(200).json({ message: "user signin successfully" });
      } else {
        res.status(400).json({ message: "Invalid credential" });
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },

  // ----------------------- Adding new Group ---------------------------

  Add: async (req, res) => {
    const { name, category, description } = req.body;
    try {
      if (!name || !category || !description) {
        res.status(404).json({ error: "Group is already exist" });
      } else {
        const grpExist = await Add.findOne({ name: name });
        if (grpExist) {
          res.status(422).json({ error: "Group is already exist" });
        } else {
          const group = new Add({
            name: name,
            category: category,
            description: description,
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

  Groups: async function (req, res) {
    try {
      const result = await Add.find();
      res.status(201).json({ data: result });
    } catch (err) {
      res.status(422).json({ error: "Something Went Wrong" });
    }
  },
};
