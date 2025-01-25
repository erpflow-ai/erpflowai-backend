import mongoose, { Schema } from "mongoose";

const bomSchema = new Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Planning', required: true },
  materials: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      costPerUnit: { type: Number, required: true },
      vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
    },
  ],
  totalCost: { type: Number, required: true },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BOM', bomSchema);
