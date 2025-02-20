const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  coverLetter: String,
  jobId: String,
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Application', applicationSchema);
