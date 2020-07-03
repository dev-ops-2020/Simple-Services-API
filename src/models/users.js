const { Schema, model } = require('mongoose');

const UsersSchema = Schema(
  {
    id: {
      type: String,
      require: false
    },
    status: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      require: true
    },
    alias: {
      type: String,
      unique: true,
      require: true
    },
    phone: {
      type: String,
      unique: true,
      require: true
    },
    email: {
      type: String,
      unique: true,
      require: true
    },
    pass: {
      type: String,
      require: true
    },
    picture: {
      type: String
    },
    deviceId: {
      type: String,
      require: true,
      Default: '0000'
    },
    token: {
      type: String,
      require: true,
      Default: '0000'
    },
    qrCode: {
      type: String
    },
    points: {
      type: String
    },
    businessFav: {
      type: []
    },
  },
  {
    timestamps: true
  }
);

module.exports = model('users', UsersSchema);