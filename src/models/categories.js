const { Schema, model } = require("mongoose");

const CategoriesSchema = Schema(
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
    icon: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("categories", CategoriesSchema);