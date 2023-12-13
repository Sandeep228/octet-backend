const express = require("express");
const {
  createJob,
  findJobs,
} = require("../controller/controller");


const router = express.Router();


router.get('/', findJobs);
router.post('/jobs', createJob);

module.exports = router;


