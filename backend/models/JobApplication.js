const mongoose = require("mongoose");

const JobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  jobId: { type: String, required: true },
  resumePath: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("JobApplication", JobApplicationSchema);
