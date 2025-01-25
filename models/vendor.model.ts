import mongoose, { Schema } from "mongoose";

const vendorSchema = new Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  supplies: [
    {
      item: { type: String, required: true },
      cost: { type: Number, required: true },
      deliveryTime: { type: Number, required: true }, // in days
    },
  ],
  ratings: { type: Number, min: 0, max: 5, default: 0 },
  lastTransactionDate: { type: Date, default: null },
});

module.exports = mongoose.model('Vendor', vendorSchema);
