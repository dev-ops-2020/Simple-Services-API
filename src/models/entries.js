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
    likes: {
      type: Number
    },
    liked: {
      type: Boolean,
      default: false
    },
    saved: {
      type: Boolean,
      default: false
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