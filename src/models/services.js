const { Schema, model } = require('mongoose');

const ServicesSchema = Schema(
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
    available: {
      type: Boolean,
      require: true,
      default: true,
    },   
    prices: {
        type: [],
        require: false,
    },
    pictures: {
      type: [],
      require: false,
    },
    status: {
      type: Boolean,
      require: true,
      default: true, // TODO Change to false when production deployment
    },
    categories: {
        type: [],
        require: true,
    },
    idBusiness: {
      type: String,
      require: true,
    },    
  },
  {
    timestamps: true,
  }
);

module.exports = model('services', ServicesSchema);