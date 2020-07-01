const { Schema, model } = require('mongoose');

const ProductsSchema = Schema(
  {
    id: {
      type: String,
      require: false
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
      default:  [{
          'picture': 'https://instagram.fsal5-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.66.1080.1080a/s320x320/102423658_919795185097749_1919929280433584534_n.jpg?_nc_ht=instagram.fsal5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=eURAspKLVwwAX8R7UT4&oh=b038918edf770078f6c03218d30220e9&oe=5F077968'
        }]
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

module.exports = model('products', ProductsSchema);