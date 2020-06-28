const { Schema, model } = require('mongoose');

const CartSchema = Schema(
  {
    id: {
      type: String,
      require: false,
    },
    userId: {
      type: String,
      require: true,
    },
    businessId: {
      type: String,
      require: true,
    },
    products: {      
      type: [],
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('cart', CartSchema);