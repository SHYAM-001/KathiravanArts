const mongoose = require('../configuration/dbConfig');

const invoiceSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    invoiceNumber: { type: String, unique: true, required: true },
    customerEmail: { type: String, required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    invoiceDate: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Invoice", invoiceSchema);
  