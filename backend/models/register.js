const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
// mongodb+srv://jitutesfaye17_db_user:<db_password>@cluster0.myaxoiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0