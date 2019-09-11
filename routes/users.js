const express = require("express");
const router = express.Router();
const { validatSignup } = require("../utils/userValidation");

router.route("/signup").post(function(req, res) {
    const { email, password } = req.body;
    const isValid = validatSignup({ email, password });

    if (isValid.error) {
        return res.status(400).json(isValid);
    }

    return res.json(isValid.value);
});

router.route("/signin").post(function(req, res) {});

router.route("/private-route").post(function(req, res) {});

module.exports = router;
