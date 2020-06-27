const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");
// @route POST api/posts
// @desc  Create a Post
// @access Private
router.post("/", (req, res) => res.send("Posts route"));

module.exports = router;
