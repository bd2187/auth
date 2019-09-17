const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");
const User = require("../models/user");

module.exports = function(passport) {
    // jwt strategy
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(
        "authorization"
    );
    opts.secretOrKey = process.env.JWT_SECRET;
    passport.use(
        new JwtStrategy(opts, function(jwt_payload, done) {
            User.findOne({ _id: jwt_payload.sub })
                .then(function(user) {
                    return user ? done(null, user) : done(null, false);
                })
                .catch(function(err) {
                    if (err) {
                        return done(err, false);
                    }
                });
        })
    );

    // local strategy
    passport.use(
        { usernameField: "email", passwordField: "password" },
        new LocalStrategy(function(email, password, done) {
            User.findOne({ email })
                .then(function(user) {
                    if (!user || !user.verifyPassword(password))
                        return done(null, false);

                    return done(null, user);
                })
                .catch(function(err) {
                    return done(err);
                });
        })
    );
};
