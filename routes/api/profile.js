const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// @route GET api/profile/test
// @desc Test profile route
// @access Public
router.get("/test", 
  (req, res) => res.json(
  { msg: "Profile work" }));

module.exports = router;
