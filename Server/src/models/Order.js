const mongoose = require('../configuration/dbConfig');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ["pending", "partial", "completed"], default: "pending" },
    isCustom: { type: Boolean, default: false }, // True if it’s a custom order
    customDetails: { type: String }, // Description of custom work (if applicable)
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Order", orderSchema);
  