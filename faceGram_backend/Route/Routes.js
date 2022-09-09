const express = require("express");
const { PostUser,Login,Add,Groups } = require("../Controller/Controller");
const router = express.Router();


router.post("/api/register",PostUser);
router.post("/api/login",Login)
router.post("/api/add",Add)
router.get("/api/groups",Groups)

module.exports = router;
