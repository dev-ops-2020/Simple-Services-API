const { Schema, model } = require('mongoose');

const MembershipsSchema = Schema(
  {
    id: {
      type: String
    },
    name: {
      type: String,
      unique: true
    },
    desc: {
      type: String
    },
    price: {
      type: String
    },
    priceOff: {
      type: String
    },
    priority: {
      type: Number
    },
    products: {
      type: Number
    },
    pictures: {
      type: Number
    },
    entries: {
      type: Number
    },
  },
  {
    timestamps: true
  }
);

module.exports = model('memberships', MembershipsSchema);