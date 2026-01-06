const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

require("dotenv").config();

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  try {
    const hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = mongoose.model("User", userSchema);
