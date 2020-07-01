const { Schema, model } = require('mongoose');

const ServicesSchema = Schema(
  {
    id: {
      type: String,
      require: false
    },
    status: {
      type: Boolean,
      require: false,
      default: true
    },
    name: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    pictures: {
      type: [],
      require: false
    },
    categories: {
      type: [],
      require: true
    },
    available: {
      type: Boolean,
      require: true,
      default: true
    },
    businessId: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('services', ServicesSchema);