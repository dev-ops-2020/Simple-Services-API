const { Schema, model } = require("mongoose");

const MembershipsSchema = Schema(
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
    color: {
      type: String,
      require: true,
    },
    priority: {
      type: Number,
      require: true,
    },
    extras: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    priceOff: {
      type: Number,
      require: true,
    },
    priceExtraCoupon: {
      type: Number,
      require: true,
    },
    quantityCoupons: {
      type: Number,
      require: true,
    },
    quantityPromotion: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("memberships", MembershipsSchema);
