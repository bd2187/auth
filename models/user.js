const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    date: { type: Date, require: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
