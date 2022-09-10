const express = require("express");
// const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { PostUser,Login,Add,Groups } = require("../Controller/Controller");
const Authenticate = require("../Middleware/Authonticate");
const router = express.Router();
// router.use(cookieParser());

router.post("/api/register",PostUser);
router.post("/api/login",Login)
router.post("/api/add",Add)
router.get("/api/groups",Groups)

module.exports = router;
