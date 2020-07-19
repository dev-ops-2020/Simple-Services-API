const { Schema, model } = require('mongoose');

const BusinessesSchema = Schema(
  {
    id: {
      type: String
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
      type: String
    },
    email: {
      type: String,
      unique: true
    },
    pass: {
      type: String
    },
    token: {
      type: String,
      Default: '0000'
    },
    deviceId: {
      type: String,
      Default: '0000'
    },
    // Business info
    type: {
      type: String
    },
    logo: {
      type: String
    },
    name: {
      type: String
    },
    desc: {
      type: String
    },
    slogan: {
      type: String
    },
    phone: {
      type: String
    },
    address: {
      type: String
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
      type: String,
      default: '0000' // TODO change
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