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
    phones: {
      type: [],
      require: false,
    },
    schedule: {
      type: [],
      require: false,
    },
    networks: {
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