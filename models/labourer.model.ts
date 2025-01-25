import mongoose, { Schema } from "mongoose";

const labourerSchema = new Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  jobRole: { type: String, required: true },
  wage: { type: Number, required: true },
  availabilityStatus: { type: Boolean, default: true },
  joinedDate: { type: Date, default: Date.now },
  projectAssigned: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', default: null },
});

module.exports = mongoose.model('Labourer', labourerSchema);
