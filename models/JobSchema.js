const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  posted: {
    type: String,
  },
  status: {
    type: String,
  },
  applied: {
    type: Number,
  },
  jobViews: {
    type: Number,
  },
  daysLeft: {
    type: Number,
  },
  premium: {
    type: Boolean,
  },
  dateFormat: {
    type: String,
  },
}, { 
  timestamps: true 
});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
