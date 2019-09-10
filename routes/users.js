const express = require("express");
const router = express.Router();

router.route("/signup").post(function(req, res) {});

router.route("/signin").post(function(req, res) {});

router.route("/private-route").post(function(req, res) {});

module.exports = router;
