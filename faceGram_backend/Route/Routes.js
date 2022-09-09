const express = require("express");
const { PostUser , Login, Add } = require("../Controller/Controller");
const router = express.Router();


router.post("/api/register",PostUser);
router.post("/api/login",Login)
router.post("/api/add",Add)

module.exports = router;
