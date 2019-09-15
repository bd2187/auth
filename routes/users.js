const express = require("express");
const router = express.Router();
const { validatSignup } = require("../utils/userValidation");
const User = require("../models/user");
const issueUserToken = require("../utils/issueUserToken");
const passport = require("passport");
const bcrypt = require("bcryptjs");

/**
 * Exchanges email and password for token
 *
 */
router.route("/signup").post(function(req, res) {
    let { email, password } = req.body;
    email = email.toLowerCase();
    const isValid = validatSignup({ email, password });

    if (isValid.error) {
        return res.status(400).json(isValid);
    }

    User.find({ email })
        .then(function(data) {
            // Check if user exists in DB
            if (data.length > 0) {
                throw {
                    message: `${email} already exists in db`
                };
            } else {
                // Generate salt to hash password
                return bcrypt.genSalt(10);
            }
        })
        .then(function(salt) {
            if (salt) {
                // hash user password
                return bcrypt.hash(password, salt);
            } else {
                throw {
                    message: "failed to generate salt for password"
                };
            }
        })
        .then(function(hash) {
            if (hash) {
                // save credentials to db
                const newUser = new User({ email, password: hash });
                return newUser.save();
            } else {
                throw {
                    message: "failed to hash salt for password"
                };
            }
        })
        .then(function(newUser) {
            if (newUser._id) {
                // generate JWT to send back to client
                return issueUserToken(newUser);
            } else {
                throw {
                    message: `Failed to save ${email} to db`
                };
            }
        })
        .then(function(token) {
            if (token) {
                return res.json({
                    success: true,
                    message: `Successfully saved ${email} to db`,
                    data: {
                        token
                    }
                });
            } else {
                throw {
                    message: `Failed to save ${email} to db`
                };
            }
        })
        .catch(function(err) {
            err.success = false;
            return res.status(400).json(err);
        });
});
/**
 * Exchanges email and password for token
 */
router.route("/signin").post(function(req, res) {});

router
    .route("/private-route")
    .get(passport.authenticate("jwt", { session: false }), function(req, res) {
        if (req.user) {
            return res.json({ success: true, data: req.user });
        } else {
            return res
                .status(403)
                .json({ success: false, message: "forbidden path" });
        }
    });

module.exports = router;
