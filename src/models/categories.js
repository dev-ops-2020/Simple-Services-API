const { Schema, model } = require('mongoose');

const CategoriesSchema = Schema(
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
      unique: true,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    icon: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('categories', CategoriesSchema);