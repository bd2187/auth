const express = require("express");
const router = express.Router();
const { validatSignup } = require("../utils/userValidation");
const User = require("../models/user");

router.route("/signup").post(function(req, res) {
    let { email, password } = req.body;
    email = email.toLowerCase();
    const isValid = validatSignup({ email, password });

    if (isValid.error) {
        return res.status(400).json(isValid);
    }

    User.find({ email })
        .then(function(data) {
            if (data.length > 0) {
                throw {
                    message: `${email} already exists in db`
                };
            } else {
                const newUser = new User({ email, password });
                return newUser.save();
            }
        })
        .then(function(data) {
            if (data.email) {
                return res.json({
                    success: true,
                    message: `Successfully saved ${email} to db`,
                    data
                });
            }
        })
        .catch(function(err) {
            err.success = false;
            return res.status(400).json(err);
        });
});

router.route("/signin").post(function(req, res) {});

router.route("/private-route").post(function(req, res) {});

module.exports = router;
