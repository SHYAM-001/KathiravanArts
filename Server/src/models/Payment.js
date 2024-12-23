const mongoose = require('../configuration/dbConfig');

const paymentSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    amountPaid: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["card", "paypal", "upi"] },
    paymentStatus: { type: String, enum: ["pending", "completed"], default: "pending" },
    transactionId: { type: String }, // From payment gateway
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Payment", paymentSchema);
  