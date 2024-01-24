const mongoose = require('mongoose');

const archiveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  // Include any additional fields needed for archiving
  archivedAt: {
    type: Date,
    default: Date.now
  }
});

const Archive = mongoose.model('Archive', archiveSchema);

module.exports = Archive;
