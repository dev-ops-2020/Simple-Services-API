const { Schema, model } = require('mongoose');

const BusinessesSchema = Schema(
  {
    id: {
      type: String,
      require: false,
    },
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    slogan: {
      type: String,
      require: true,
    },
    owner: {
      type: String,
      require: true,
    },
    score: {
      type: Number,
      require: false,
      default: 5 // TODO Change value when production deployment
    },
    status: {
      type: Boolean,
      require: true,
      default: true, // TODO Change to false when production deployment
    },
    logo: {
      type: String,
      require: false,
    },
    pictures: {
      type: [],
      require: false,
    },
    phone: {
      type: String,
      require: false,
    },
    fb: {
      type: String,
      require: false,
    },
    ig: {
      type: String,
      require: false,
    },
    wa: {
      type: String,
      require: false,
    },
    schedule: {
      type: [],
      require: false,
    },
    categories: {
      type: [],
      require: true,
    },
    latitude: {
      type: Number,
      require: true,
    },
    longitude: {
      type: Number,
      require: true,
    },
    idMembership: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('businesses', BusinessesSchema);