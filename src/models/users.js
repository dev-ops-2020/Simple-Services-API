const { Schema, model } = require('mongoose');

const UsersSchema = Schema(
  {
    id: {
      type: String,
      require: false,
    },
    name: {
      type: String,
      require: true,
    },
    alias: {
      type: String,
      unique: true,
      require: true,
    },
    phone: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    picture: {
      type: String,
      require: true,
    },
    qrCode: {
      type: String,
      require: false,
    },
    points: {
      type: String,
      require: false,
    },
    status: {
      type: Boolean,
      require: true,
      default: true,
    },
    rol: {
      type: String,
      enum: ['Admin', 'Business', 'Client'],
      require: true,
      default: 'Client',
    },
    idDevice: {
      type: String,
      require: true,
      Default: '0000'
    },
    token: {
      type: String,
      require: true,
      Default: '0000'
    },
    businessFav: {
      type: [],
      require: false,
    },
    coupons: {
      type: [],
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('users', UsersSchema);