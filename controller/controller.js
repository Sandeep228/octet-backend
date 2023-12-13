const JobModel = require("../models/JobSchema");

// Create
async function createJob(req, res) {
  try {
    const newJob = new JobModel(req.body);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// Read
async function findJobs(req, res) {
  try {
    const jobs = await JobModel.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createJob,
    findJobs 
};
