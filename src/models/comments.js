const { Schema, model } = require('mongoose');

const CommentsSchema = Schema(
  {
    id: {
      type: String,
      require: false
    },
    comment: {
      type: String,
      require: true
    },
    date: {
      type: String,
      require: true
    },
    userId: {
      type: String,
      require: true
    },
    userAlias: {
      type: String,
      require: true
    },
    userPicture: {
      type: String,
      require: true
    },
    businessId: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('comments', CommentsSchema);