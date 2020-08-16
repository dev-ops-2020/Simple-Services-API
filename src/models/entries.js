const { Schema, model } = require('mongoose');

const EntriesSchema = Schema(
  {
    id: {
      type: String
    },
    image: {
      type: String
    },
    desc: {
      type: String
    },
    date: {
      type: String
    },
    status: {
      type: String
    },
    businessId: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('entries', EntriesSchema);