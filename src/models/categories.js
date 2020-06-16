const { Schema, model } = require('mongoose');

const CategoriesSchema = Schema(
  {
    id: {
      type: String,
      require: false,
    },
    name: {
      type: String,
      unique: true,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    icon: {
      type: String,
      require: false,
    },
    status: {
      type: Boolean,
      require: true,
      default: true, // TODO Change to false when production deployment
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('categories', CategoriesSchema);