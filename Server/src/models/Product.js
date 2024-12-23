const mongoose = require('../configuration/dbConfig');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }], // URLs of the artwork images
    isAvailable: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Product", productSchema);
  