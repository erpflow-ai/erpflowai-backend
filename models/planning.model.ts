import mongoose, { Schema } from "mongoose";

const planningSchema = new Schema({
  projectName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  budget: { type: Number, required: true },
  milestones: [
    {
      name: { type: String, required: true },
      deadline: { type: Date, required: true },
      status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    },
  ],
  resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Labourer' }],
  vendorIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' }],
  status: { type: String, enum: ['planned', 'ongoing', 'completed'], default: 'planned' },
});

module.exports = mongoose.model('Planning', planningSchema);
