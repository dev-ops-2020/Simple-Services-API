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
    password: {
      type: String,
      require: true
    },
    picture: {
      type: String,
      default: 'https://firebasestorage.googleapis.com/v0/b/simple-services-25f81.appspot.com/o/images%2Fusers%2Fdefault_user.png?alt=media'
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