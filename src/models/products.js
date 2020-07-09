const { Schema, model } = require('mongoose');

const ProductsSchema = Schema(
  {
    id: {
      type: String,
      require: false
    },
    type: {
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
    price: {
      type: Number,
      require: true
    },
    available: {
      type: Boolean,
      require: true
    },
    pictures: {
      type: [],
    },
    tags: {
      type: [],
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