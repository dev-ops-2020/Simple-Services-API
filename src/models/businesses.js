const { Schema, model } = require('mongoose');

const BusinessesSchema = Schema(
  {
    id: {
      type: String,
      require: false
    },
    status: {
      type: Boolean,
      default: true
    },
    // Owner info
    owner: {
      type: String,
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
    // Business info
    logo: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    desc: {
      type: String,
      require: true
    },
    slogan: {
      type: String,
      require: true
    },
    address: {
      type: String,
      require: true
    },
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    },
    fb: {
      type: String
    },
    ig: {
      type: String
    },
    wa: {
      type: String
    },
    delivery: {
      type: Boolean
    },
    schedule: {
      type: []
    },
    categories: {
      type: []
    },
    pictures: {
      type: []
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
    membershipId: {
      type: String
    },
  },
  {
    timestamps: true
  }
);

module.exports = model('businesses', BusinessesSchema);