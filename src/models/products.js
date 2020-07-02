const { Schema, model } = require('mongoose');

const ProductsSchema = Schema(
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
    description: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    categories: {
      type: [],
    },
    pictures: {
      type: [],
    },
    available: {
      type: Boolean,
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

module.exports = model('products', ProductsSchema);