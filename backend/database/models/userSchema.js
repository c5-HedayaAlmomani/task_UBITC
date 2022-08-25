const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
  fistName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  img: { type: String }
});
userSchema.pre("save", async function () {
    const hasspass = await bcrypt.hash(this.password, 10);
    this.password = hasspass;
  });


module.exports = mongoose.model("User Model", userSchema);