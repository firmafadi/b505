const express = require("express");

const router = express.Router();

const user = require("../controllers/user.controller.js");

router.get("/", user.getAllUser);

module.exports = router;