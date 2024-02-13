const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../db/datauser");

router.get("/", (req, res) => {

	
});

router.get("/edit", ensureAuth, (req, res) => {
});

module.exports = router;
