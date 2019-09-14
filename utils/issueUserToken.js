const jwt = require("jsonwebtoken");

const issueUserToken = function(user) {
    try {
        return jwt.sign(
            {
                iss: "bd",
                sub: user._id,
                iat: new Date().getTime(),
                expiresIn: "24h"
            },
            "secret_will_be_encrypted_someday_maybe"
        );
    } catch (err) {
        throw {
            message: `failed to save ${user.email} to db`,
            data: "jwt signing failed"
        };
    }
};

module.exports = issueUserToken;
