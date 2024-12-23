const mongoose = require('../configuration/dbConfig');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String }, // Only for non-OAuth users
  googleId: { type: String }, // For Google OAuth
  isArtist: { type: Boolean, default: false },
  address: { type: String },
  phone: { type: String },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
