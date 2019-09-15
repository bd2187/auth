const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    date: { type: Date, require: true }
});

userSchema.pre("save", function(next) {
    bcrypt
        .genSalt(10)
        .then(salt => {
            if (salt) {
                return bcrypt.hash(this.password, salt);
            }
        })
        .then(hash => {
            this.password = hash;
            next();
        });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
