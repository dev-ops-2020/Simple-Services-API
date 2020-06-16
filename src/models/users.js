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
      require: false,
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