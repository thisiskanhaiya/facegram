const express = require("express");
const { PostUser } = require("../Controller/Controller");
const router = express.Router();


router.post("/api/register",PostUser);


module.exports = router;
