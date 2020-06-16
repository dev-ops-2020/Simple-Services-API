const { Schema, model } = require('mongoose');

const CommentsSchema = Schema(
  {
    id: {
      type: String,
      require: false,
    },
    comment: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    idUser: {
      type: String,
      require: true,
    },
    nameUser: {
      type: String,
      require: true,
    },
    pictureUser: {
      type: String,
      require: true,
    },
    idBusiness: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('comments', CommentsSchema);