const { Schema, model } = require('mongoose');

const BusinessesSchema = Schema(
  {
    id: {
      type: String,
      require: false
    },
    status: {
      type: Boolean,
      default: true // Change to false on deploy to production
    },
    // Owner info
    type: {
      type: String, // Products || Services
    },
    owner: {
      type: String,
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
    token: {
      type: String,
      require: true,
      Default: '0000'
    },
    deviceId: {
      type: String,
      require: true,
      Default: '0000'
    },
    // Business info
    type: {
      type: String,
      require: true
    },
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
    phone: {
      type: String,
      require: true
    },
    address: {
      type: String,
      require: true
    },
    lat: {
      type: Number
    },
    lng: {
      type: Number
    },
    loc: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        index: '2dsphere'
      }
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
    membershipId: {
      type: String
    },
    membershipValue: {
      type: String
    },
    score: {
      type: String
    },
  },
  {
    timestamps: true
  }
);

module.exports = model('businesses', BusinessesSchema);